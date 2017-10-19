---
layout: page
title: "Q130275: How to Implement OLE Custom Control Context Sensitive Help"
permalink: /kb/130/Q130275/
---

## Q130275: How to Implement OLE Custom Control Context Sensitive Help

	Article: Q130275
	Product(s): Microsoft C Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbcode kbole kbCtrl
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ActiveX SDK, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An OLE Custom Control can provide context sensitive help on the currently
	selected control, property, or event by modifying the .ODL file. This article
	shows by example how to implement it.
	
	MORE INFORMATION
	================
	
	The help file for GENERIC is given by the helpfile attribute in the library
	declaration in the GENERIC.ODL file. In the following code, GENERIC.HLP is the
	help file for the custom control.
	
	     [uuid(5CE3E2E3-8D26-101B-B883-444553540000), version(1.0),
	      helpstring("GENERIC OLE Custom Control module"),
	      helpfile("GENERIC.HLP")]
	      library GENERICLib
	
	The associated GENERIC.HPJ file lists helpcontext attributes for each of the help
	subjects:
	
	[MAP]
	GENERIC                    10
	GenericShape             50
	FlashColor                  60
	ClickIn                        70
	ClickOut                     80
	
	To specify the help topic ID for help on the control, add the helpcontext
	attribute of 10 to the coclass declaration in GENERIC.ODL; the following code
	demonstrates this:
	
	     [ uuid(5CE3E2E0-8D26-101B-B883-444553540000),
	      helpstring("GENERIC Control"), helpcontext(10)]
	      coclass CGENERIC
	
	To specify the help topic ID for a control property, add the helpcontext
	attribute to the property declaration in the property list. The following code
	demonstrates a help context ID of 50 and 60 for the GenericShape and FlashColor
	properties respectively:
	
	  [ uuid(5CE3E2E1-8D26-101B-B883-444553540000),
	    helpstring("Dispatch interface for GENERIC Control") ]
	   dispinterface _DGENERIC
	  {
	              properties:
	           // NOTE - ClassWizard will maintain property information here.
	           //    Use extreme caution when editing this section.
	           //{ {AFX_ODL_PROP(CGENERICCtrl)
	              [id(3), helpcontext(50)] GenericShapeConstants
	                                                            GenericShape;
	              [id(1), helpcontext(60)] OLE_COLOR FlashColor;
	              [id(4)] BSTR FontName;
	              [id(5)] boolean FontBold;
	              [id(6)] boolean FontItalic;
	              [id(7)] boolean FontStrikethru;
	              [id(8)] boolean FontUnderline;
	              [id(9)] float FontSize;
	              [id(DISPID_BACKCOLOR), bindable, requestedit]
	                                                            OLE_COLOR
	  BackColor
	  ;
	              [id(DISPID_CAPTION), bindable, requestedit] BSTR
	                                                            Caption;
	              [id(DISPID_FONT), bindable] IFontDisp* Font;
	              [id(DISPID_BORDERSTYLE), bindable, requestedit]
	
	  BorderStyleConstants BorderStyle;
	              [id(DISPID_ENABLED), bindable, requestedit] boolean
	                                                            Enabled;
	              [id(2)] MousePointerConstants MousePointer;
	              [id(10)] IPictureDisp* MouseIcon;
	          //} }AFX_ODL_PROP
	
	To specify the help topic ID for a control event, add the helpcontext attribute
	to the event declaration in the event list. The following code demonstrates a
	help context ID of 70 and 80 for the ClickIn and ClickOut events respectively:
	
	   [ uuid(5CE3E2E2-8D26-101B-B883-444553540000),
	    helpstring("Event interface for GENERIC Control") ]
	  dispinterface _DGENERICEvents
	  {
	              properties:
	              //  Event interface has no properties
	
	              methods:
	              // NOTE - ClassWizard will maintain event information here.
	              //    Use extreme caution when editing this section.
	              //{ {AFX_ODL_EVENT(CGENERICCtrl)
	              [id(1), helpcontext(70)] void ClickIn(float* X, float* Y,
	
	       BSTR* Caption);
	              [id(2), helpcontext(80)] void ClickOut();
	              //} }AFX_ODL_EVENT
	  };
	
	Additional query words: 2.00 OCX
	
	======================================================================
	Keywords          : kbcode kbole kbCtrl 
	Technology        : kbAudDeveloper kbZNotKeyword kbSDKSearch kbSDKActiveXsearch kbSDKActiveX
	Version           : :1.0
	
	=============================================================================
	
