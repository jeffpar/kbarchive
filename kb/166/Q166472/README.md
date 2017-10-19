---
layout: page
title: "Q166472: Using Fonts in ATL Controls with NiceText.exe"
permalink: /kb/166/Q166472/
---

## Q166472: Using Fonts in ATL Controls with NiceText.exe

	Article: Q166472
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,3.0
	Operating System(s): 
	Keyword(s): kbfile kbprogramming kbsample kbusage kbATL200 kbATL210 kbCtrl kbFont kbATL300 kbGrpDSM
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Active Template Library (ATL) programmers creating ActiveX controls that display
	text may find it beneficial to allow the user of the control to select the font
	that the text is drawn in. ATL provides some functionality for a stock font
	property, or you may choose to use a custom font property. In ATL ActiveX
	controls, the steps to implement a custom or stock font property are practically
	the same. The More Information section of this article describes the steps to
	take to add a stock font property to your ATL ActiveX control. The NiceText
	sample shows how to implement an ATL control that uses a stock font property.
	
	NiceText.exe is a self-extracting executable file that contains the source files
	for the NiceText control.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	NiceText.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	MORE INFORMATION
	================
	
	Use these steps to create a control with a stock font property:
	
	1. Open an existing ATL in-proc server project or create a new one.
	
	2. Using the ATL Object Wizard, insert a new ATL control into your project. Give
	  the control a name, then select the Stock Properties tab. From the Stock
	  Properties tab, select the Font property and insert it into your control.
	  Completing this step adds an interface definition such as the following to
	  your projects Interface Definition Language file (.idl file). The interface
	  definition in your .idl file looks similar to the following:
	
	        [
	           object,
	           uuid(E882D672-878E-11D0-B00C-000000000000),
	           dual,
	           helpstring("INiceTextCtrl Interface"),
	           pointer_default(unique)
	        ]
	        interface INiceTextCtrl : IDispatch
	        {
	           [propputref, id(DISPID_FONT)]
	           HRESULT Font([in]IFontDisp* pFont);
	           [propput, id(DISPID_FONT)]
	           HRESULT Font([in]IFontDisp* pFont);
	           [propget, id(DISPID_FONT)]
	           HRESULT Font([out, retval]IFontDisp** ppFont);
	        };
	
	  In order for your control's Font property to work correctly in most control
	  containers, you need to move this interface definition from outside the
	  Library block in your .idl file to inside the Library block. You also need to
	  remove the #import for Ucidl.idl from the .idl file. Your .idl file now has a
	  Library section that looks like the following:
	
	        [
	           uuid(E882D665-878E-11D0-B00C-000000000000),
	                version(1.0),
	                helpstring("nicetext 1.0 Type Library")
	        ]
	        library NICETEXTLib
	        {
	                importlib("stdole32.tlb");
	                importlib("stdole2.tlb");
	
	                [    object,
	                        uuid(E882D672-878E-11D0-B00C-000000000000),
	                        dual,
	                        helpstring("INiceTextCtrl Interface"),
	                        pointer_default(unique)
	                ]
	                interface INiceTextCtrl : IDispatch
	                {
	                        [propputref, id(DISPID_FONT)]
	                        HRESULT Font([in]IFontDisp* pFont);
	                        [propput, id(DISPID_FONT)]
	                        HRESULT Font([in]IFontDisp* pFont);
	                        [propget, id(DISPID_FONT)]
	                        HRESULT Font([out, retval]IFontDisp** ppFont);
	                };
	
	                [
	                        uuid(E882D673-878E-11D0-B00C-000000000000),
	                        helpstring("NiceTextCtrl Class") ]
	                        coclass NiceTextCtrl
	                {
	                        [default] interface INiceTextCtrl;
	                };
	        };
	
	  This step also adds a member variable named m_pFont to your control's
	  implementation class to hold the Font property. The get, put, and putref
	  functions for the stock Font property are implemented by ATL in the
	  CStockPropImpl class inside Atlctl.h. If you are implementing a non- stock
	  Font property, you have to add the get, put, or putref functions manually if
	  you are using Visual C++ 4.2b. If you are using Visual C++ 5.0, you can use
	  the interface browser to add the property, which adds the property get and
	  put functions for you.
	
	3. Add a static variable of type FONTDESC to your control's .cpp file. The
	  FONTDESC structure holds the default description of your Font property. You
	  can create and initialize the variable in the same step as follows:
	
	        static const FONTDESC _fontdesc =
	        {sizeof(FONTDESC), OLESTR("times new roman"), FONTSIZE( 14 ),
	        FW_BOLD, ANSI_CHARSET, TRUE, FALSE, FALSE };
	
	4. Add an entry to your control's property map for the stock Font such as the
	  following:
	
	        PROP_ENTRY("Font", DISPID_FONT, CLSID_MSStockFont)
	
	  NOTE: You also need to #include <ATLCTL.H>
	
	5. Change your control's drawing code so it uses your font property to draw
	  text. Here is an example of drawing code you could add to an ATL control's
	  OnDraw member function:
	
	        HFONT hStockFont=NULL,hOldFont=NULL;
	         CComQIPtr<IFont,&IID_IFont> pFont(m_pFont);
	         TCHAR msg[50];
	         wsprintf(msg,_T("Current Thread is %x"),GetCurrentThreadId());
	         if(pFont)
	            pFont->get_hFont(&hStockFont);
	         if(hStockFont)
	                 hOldFont = (HFONT)SelectObject(di.hdcDraw,hStockFont);
	         DrawText(di.hdcDraw, msg, -1, &rc, DT_CENTER | DT_VCENTER |
	                  DT_SINGLELINE);
	         if(hOldFont)
	            SelectObject(di.hdcDraw,hOldFont);
	
	6. It is recommended that you implement a sink object to connect to the Font
	  object's property notification source so that your control updates its
	  rendering with the correct font properties when a client changes one of your
	  font's properties. COM-based fonts support an outgoing interface based on the
	  IPropertyNotifySink interface to notify font users when properties of the
	  font, such as name or weight, are about to change and after they have been
	  changed. To receive notification of these changes, add a class to your
	  project that implements the IPropertyNotifySink interface. Then, an instance
	  of this class can be created by the control and a pointer to it passed to the
	  Font object's connection point. Your control then receives notifications from
	  the Font object if its properties change, which allows you to update your
	  control's text accordingly.
	
	  The following class implements an IPropertyNotifySink interface and can be
	  used for receiving notifications from a Font object. This class also holds a
	  back pointer to the parent control object so that it can update the control
	  when properties change. This class is added to the control's header file
	  before the declaration of the control's class:
	
	        class CNiceTextCtrl; //forward definition of parent class
	        class ATL_NO_VTABLE CFontNotifyImpl :
	                public CComObjectRootEx<CComSingleThreadModel>
	                public IPropertyNotifySink
	        {
	        public:
	                CFontNotifyImpl():m_pParent(NULL){}
	        BEGIN_COM_MAP(CFontNotifyImpl)
	                COM_INTERFACE_ENTRY(IPropertyNotifySink)
	        END_COM_MAP()
	
	        public:
	                STDMETHOD(OnChanged)(DISPID dispid);
	                STDMETHOD(OnRequestEdit)(DISPID dispid){return S_OK;}
	
	                DWORD m_FontNotifyCookie;
	                void SetParent(CNiceTextCtrl *pParent){m_pParent = pParent;}
	                CNiceTextCtrl *m_pParent;
	        };
	
	  To your control, add a protected member variable that holds a sink object:
	
	        CComObject<CFontNotifyImpl> *m_pFontNotifySink;
	
	  Initialize the sink object in your control's constructor:
	
	        CComObject<CFontNotifyImpl>::CreateInstance(&m_pFontNotifySink);
	        m_pFontNotifySink->SetParent(this);
	
	7. Initialize the font object for the control and hook up the sink interface. A
	  good place to do this is in SetClientSite. SetClientSite is called when a
	  control first begins to interact with a container, soon after the control
	  object is created on behalf of a container. To override SetClientSite. add it
	  as a member of your control class by adding the following to your control's
	  header file inside your class declaration:
	
	        STDMETHOD(SetClientSite)(LPOLECLIENTSITE pSite);
	
	  And implement it in your object's .cpp file like this:
	
	        STDMETHODIMP CNiceTextCtrl::IOleObject_SetClientSite
	                                                      (LPOLECLIENTSITE pSite)
	        {
	        HRESULT hr = CComControlBase::IOleObject_SetClientSite(pSite);
	        // Check to see if the container has an ambient font. If it does,
	        // clone it so your user can change the font of the control
	        // without changing the ambient font for the container. If there is
	        // no ambient font, create your own font object when you hook up a
	        // client site.
	
	        if(!m_pFont && pSite)
	        {
	           FONTDESC fd = _fontdesc;
	           CComPtr<IFont> pAF;
	           CComPtr<IFont> pClone;
	        if(SUCCEEDED(GetAmbientFont(&pAF)))
	         {
	             //clone the font
	            if(SUCCEEDED(pAF->Clone(&pClone)))
	                pClone->QueryInterface(IID_IFontDisp, (void**)&m_pFont);
	
	         }
	         else
	         {
	            OleCreateFontIndirect(&fd,IID_IFontDisp,(void**)&m_pFont);
	         }
	         //also, hook up a notify sink
	         if(m_pFont&&m_pFontNotifySink)
	         {
	            //smart pointers will release themselves
	          CComQIPtr<IConnectionPointContainer,&IID_IConnectionPointContainer>
	          pCPC(m_pFont);
	          CComPtr<IConnectionPoint> pCP;
	          if(pCPC)
	          {
	             pCPC->FindConnectionPoint(IID_IPropertyNotifySink,&pCP);
	             if(pCP)
	             {
	                 pCP->Advise((IUnknown*)m_pFontNotifySink,
	                        &m_pFontNotifySink->m_FontNotifyCookie);
	             }
	          }
	        }
	       }
	        return hr;
	        }
	
	8. Have the sink interface update the control when font properties change:
	
	        STDMETHODIMP CFontNotifyImpl::OnChanged(DISPID dispid)
	        {
	                ATLTRACE(_T("OnChanged sink: %x\n"),this);
	           m_pParent->FireViewChange();
	           return S_OK;
	        }
	
	Additional query words: font ATL stock property
	
	======================================================================
	Keywords          : kbfile kbprogramming kbsample kbusage kbATL200 kbATL210 kbCtrl kbFont kbATL300 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbATLsearch kbATL200 kbATL300 kbATL210
	Version           : :2.0,2.1,3.0
	Issue type        : kbinfo
	
	=============================================================================
	
