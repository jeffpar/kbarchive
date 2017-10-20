---
layout: page
title: "Q138411: Deriving an OLE Control from a Base Control"
permalink: /kb/138/Q138411/
---

## Q138411: Deriving an OLE Control from a Base Control

{% raw %}

	Article: Q138411
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbfile
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft OLE Control Developer's Kit (CDK) 
	-------------------------------------------------------------------------------
	
	This is the Visual C++ 1.5x and 2.x version of this sample. There is an
	equivalent Visual C++ 4.x 32-bit sample available under the name SHAPES32.
	
	SUMMARY
	=======
	
	The SHAPES sample illustrates how to derive an OLE control from a base control
	thus allowing the derived control to take advantage of the base control's
	methods, properties, and events.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Shapes2.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	MORE INFORMATION
	================
	
	The Shapes2 sample implements a base control class called CBaseShapeCtrl and two
	derived control classes called CCircleCtrl and CRectangleCtrl. CCircleCtrl and
	CRectangleCtrl draw themselves using the properties provided by the base
	CBaseShapeCtrl class. CCircleCtrl and CRectangleCtrl also allow access to the
	methods and events implemented in the base CBaseShapeCtrl class.
	
	Properties, Methods, and Events
	-------------------------------
	
	The CBaseShapeCtrl class provides the base functionality of a simple shape
	control. It implements the following properties, events, and methods:
	
	Name          Type       Use
	FillColor     Property   An OLE_COLOR value that represents the color
	                        used to fill the shape.
	LineColor     Property   An OLE_COLOR value that represents the color
	                        used for the shape's outline.
	LineWidth     Property   A short value that represents the line width
	                        in pixels of the shape's outline.
	BaseMethod1   Method     A test method that, when invoked, fires the
	                        BaseEvent1 event. Takes a single parameter of
	                        type long.
	BaseMethod2   Method     A test method that, when invoked, fires the
	                        BaseEvent2 event. Takes a single parameter of
	                        type BSTR.
	BaseEvent1    Event      A test event. Returns a long.
	BaseEvent2    Event      A test event. Returns a BSTR.
	
	The CCircleCtrl class provides the functionality of a simple circle control. It
	implements the following properties, events, and methods:
	
	Name           Type       Use
	CircleShape    Property   A boolean value. If TRUE, the control draws
	                         itself as a circle. If FALSE, it draws itself
	                         as an ellipse.
	CircleOffset   Property   A short value that represents the number of
	                         pixels offset from the center of the bounding
	                         rectangle where the control will draw itself.
	CircleMethod1  Method     A test method that, when invoked, fires the
	                         CircleEvent1 event. Takes a single parameter
	                         of type long.
	CircleMethod2  Method     A test method that, when invoked, fires the
	                         CircleEvent2 event. Takes a single parameter
	                         of type long.
	CircleEvent1   Event      A test event. Returns a long.
	CircleEvent2   Event      A test event. Returns a long.
	
	The CRectangleCtrl class provides the functionality of a simple rectangle
	control. It implements the following properties, events, and methods:
	
	Name            Type       Use
	RoundedCorners  Property   A boolean value. If TRUE, the control draws
	                          itself with rounded corners. If FALSE, it
	                          draws itself with square corners.
	RectangleInset  Property   A short value that represents the number of
	                          pixels inside the control's bounding
	                          rectangle where the control will inset itself.
	RectMethod1     Method     A test method that, when invoked, fires the
	                          RectEvent1 event. Takes no parameters.
	RectMethod2     Method     A test method that, when invoked, fires the
	                          RectEvent2 event. Takes no parameters.
	RectEvent1      Event      A test event. Returns void.
	RectEvent2      Event      A test event. Returns void.
	
	Modifying the Base Control Class
	--------------------------------
	
	Several changes need be made to the code generated by ControlWizard to allow a
	derived control to cleanly inherit the functionality provided by a base control.
	The following changes were made to the files generated by ClassWizard:
	
	1. The ON_OLEVERB entry for AFX_IDS_VERB_PROPERTIES in the CBaseShapeCtrl
	  message map was removed:
	
	     BEGIN_MESSAGE_MAP(CBaseShapeCtrl, COleControl)
	       //{{AFX_MSG_MAP(CBaseShapeCtrl)
	       //}}AFX_MSG_MAP
	       //ON_OLEVERB(AFX_IDS_VERB_PROPERTIES, OnProperties)
	     END_MESSAGE_MAP()
	
	  If this isn't done, control containers will list the Properties verb twice
	  when the the user clicks Control Object on the Edit menu.
	
	2. The CBaseShapeCtrl::CBaseShapeCtrlFactory::UpdateRegistry function was
	  changed to simply return TRUE:
	
	     BOOL CBaseShapeCtrl::CBaseShapeCtrlFactory::UpdateRegistry(
	         BOOL bRegister)
	     {
	       return TRUE;
	     }
	
	  If this isn't done, the base control is registered and containers will list it
	  along with the derived controls when the user attempts to insert a new
	  control.
	
	3. The CBaseShapePropPage::CBaseShapePropPageFactory::UpdateRegistry function
	  was changed to simply return TRUE:
	
	     BOOL CBaseShapePropPage::CBaseShapePropPageFactory::UpdateRegistry(
	       BOOL bRegister)
	     {
	       return TRUE;
	     }
	
	  If this isn't done, the base class control's Property page is registered, so
	  it will appear in the registry.
	
	4. The call to InitializeIIDs in the base control class constructor was
	  removed:
	
	     CBaseShapeCtrl::CBaseShapeCtrl()
	     {
	       //InitializeIIDs(&IID_DBaseShape, &IID_DBaseShapeEvents);
	
	       // TODO: Initialize your control's instance data here.
	     }
	
	  If this isn't done, there will be a memory leak upon termination when the
	  cached type information for the base class is not freed.
	
	5. The code in the base control's section of the project's .odl file was changed
	  to comments (commented out). If this isn't done, some containers (for
	  example, Visual Basic version 4.0) won't load the control.
	
	6. The CBaseShapeCtrl::DoPropExchange method was modified to not call the
	  COleControl::ExchangeVersion function:
	
	     void CBaseShapeCtrl::DoPropExchange(CPropExchange* pPX)
	     {
	       // ExchangeVersion(pPX, MAKELONG(_wVerMinor, _wVerMajor));
	       COleControl::DoPropExchange(pPX);
	
	       ...
	     }
	
	  If this isn't done, saving the state of the derived OLE control will generate
	  an assertion on line 1169 of the Propset.cpp file. The assertion is generated
	  because the _Version property has already been serialized by a call to the
	  ExchangeVersion method in the DoPropExchange method of the derived control.
	
	7. The DoPropExchange method of the derived OLE controls was changed to make a
	  call to CBaseShapeCtrl::DoPropExchange instead of
	  COleControl::DoPropExchange:
	
	     void CCircleCtrl::DoPropExchange(CPropExchange* pPX)
	     {
	       ExchangeVersion(pPX, MAKELONG(_wVerMinor, _wVerMajor));
	       CBaseShapeCtrl::DoPropExchange(pPX);
	
	       ...
	     }
	
	Manually Updating the Project's .Odl File
	-----------------------------------------
	
	ClassWizard does not provide any support for developing OLE controls that are
	derived from another control. As a result, the property, method, and event
	dispatch ID's used by a derived control class need to be manually updated. MFC
	Technical Note #39 discusses the dispatch ID numbering scheme used by MFC.
	Basically, MFC divides a 32-bit dispatch ID (DISPID) into two parts. The LOWORD
	of the DISPID contains the distance from the top of the dispatch map (1
	relative). The HIWORD contains the distance of the dispatch map from the most
	derived class (0 relative).
	
	The CCircleCtrl and CRectangleControl classes use this technique with their
	DISPIDs. For example, the CCircleCtrl derived control inherits the FillColor,
	LineColor, and LineWidth properties from CBaseShapeCtrl. The DISPIDs for these
	properties need to be manually added to the CCircleCtrl properties section of
	the project's .odl file and the HIWORD of the DISPIDs needs to be adjusted:
	
	  //  Primary dispatch interface for CCircleCtrl
	  [ uuid(A7EC6760-BFED-11CE-8250-524153480001),
	    helpstring("Dispatch interface for sample Circle Control"), hidden ]
	  dispinterface _DCircle
	  {
	    properties:
	      // NOTE - ClassWizard will maintain property information here.
	      //    Use extreme caution when editing this section.
	      //{{AFX_ODL_PROP(CCircleCtrl)
	      [id(0x10001)] OLE_COLOR FillColor;
	      [id(0x10002)] OLE_COLOR LineColor;
	      [id(0x10003)] short LineWidth;
	      [id(1)] boolean CircleShape;
	      [id(2)] short CircleOffset;
	      //}}AFX_ODL_PROP
	      ...
	
	The FillColor, LineColor, and LineWidth properties implemented in the base class
	have DISPIDs of 1, 2, and 3 respectively. Once the HIWORD portion of these
	DISPIDs has been adjusted, they become 0x10001 (65537), 0x10002 (65538), and
	0x10003 (65539).
	
	The DISPIDs for events are handled differently from those for properties and
	methods. Event DISPIDs do not have their HIWORD portion adjusted. Instead, they
	are sequential. For example, CCircleCtrl inherits the BaseEvent1 and BaseEvent2
	events from the base control. The DISPIDs for the base events need to be
	manually added to the CCircleCtrl events section of the project's .odl file.
	Also, the DISPIDs assigned by ClassWizard for the events provided by CCircleCtrl
	(CircleEvent1 and CircleEvent2) need to have their DISPIDs manually updated:
	
	  [ uuid(A7EC6761-BFED-11CE-8250-524153480001),
	    helpstring("Event interface for sample Circle Control") ]
	  dispinterface _DCircleEvents
	  {
	    properties:
	      //  Event interface has no properties
	    methods:
	      // NOTE - ClassWizard will maintain event information here.
	      //    Use extreme caution when editing this section.
	      //{{AFX_ODL_EVENT(CCircleCtrl)
	      [id(1)] void BaseEvent1(long lParam);
	      [id(2)] void BaseEvent2(BSTR pszString);
	      [id(3)] void CircleEvent1(long lParam);
	      [id(4)] void CircleEvent2(long lParam);
	      //}}AFX_ODL_EVENT
	  };
	
	Manually updating the DISPIDs can be problematic because ClassWizard may get
	confused when it sees the entries for the events in the base class. As a result,
	more than one event may be assigned the same DISPID. After adding new events to
	a derived class, inspect the project's .odl file, and fix any conflicts.
	
	ClassWizard also maintains DISPID values for properties, methods, and events, in
	an enum member of the COleControl derived class. Again, because ClassWizard does
	not support deriving an OLE control from another control, it may generate
	conflicting values for the different DISPIDs. If this happens, manually edit the
	values so that they are correct, and match the values as specified in the .odl
	file. Following is the portion of the CCircleCtrl class that shows the DISPIDs
	used for both the base class and derived class properties, events, and methods:
	
	  class CCircleCtrl : public CBaseShapeCtrl
	  {
	  ...
	
	  // Dispatch and event IDs
	  public:
	    enum {
	    //{{AFX_DISP_ID(CCircleCtrl)
	    //dispidFillColor   = 65537L,
	    //dispidLineColor   = 65538L,
	    //dispidLineWidth   = 65539L,
	    //dispidBaseMethod1 = 65540L,
	    //dispidBaseMethod2 = 65541L,
	
	    dispidCircleShape   = 1L,
	    dispidCircleOffset  = 2L,
	    dispidCircleMethod1 = 3L,
	    dispidCircleMethod2 = 4L,
	
	    //eventidBaseEvent1 = 1L,
	    //eventidBaseEvent2 = 2L,
	    eventidCircleEvent1 = 3L,
	    eventidCircleEvent2 = 4L,
	    //}}AFX_DISP_ID
	  };
	
	the Shapes2 sample is based on a ControlWizard-generated OLE control. Files
	included with the sample that are directly related to deriving an OLE control
	from a base control are:
	
	  Shapes.odl -
	  Shows the modified DISPIDs used by the derived control classes.
	
	  Basectl.cpp -
	  Provides the implementation of the base CBaseShapeCtrl class.
	
	  Circctl.cpp -
	  Provides the implementation of the derived CCircleCtrl class.
	
	  Rectctl.cpp -
	  Provides the implementation of the derived CRectangleCtrl class.
	
	REFERENCES
	==========
	
	MFC Technical Note #39.
	
	Additional query words: 2.00 2.10 2.20 2.50 2.51 2.52 3.00 3.10 3.20 shapes32
	
	======================================================================
	Keywords          : kbfile 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	
	=============================================================================
	

{% endraw %}
