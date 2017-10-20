---
layout: page
title: "Q185657: HOWTO: Utilize the Hyperlink Foundation Class"
permalink: /kb/185/Q185657/
---

## Q185657: HOWTO: Utilize the Hyperlink Foundation Class

{% raw %}

	Article: Q185657
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Hyperlink functionality is a new feature available in Visual FoxPro 6.0. Using a
	hyperlink object, Visual FoxPro applications can be used to request an Active
	Document container or to navigate to a given Uniform Resource Locator (URL).
	This article describes how to use hyperlink objects to launch a Web browser when
	the object is clicked.
	
	MORE INFORMATION
	================
	
	A Hyperlink object does not have a user interface and is supported only in
	Microsoft Internet Explorer. The Hyperlink Button, Hyperlink Image, and
	Hyperlink Label Foundation Classes in the Component Gallery, however, can be
	used to create browser independent navigational capabilities.
	
	The cTarget property of a Hyperlink object is used to specify the URL for the
	object. The lnewwindow property of a Hyperlink object is used to determine
	whether a new instance of the Web Browser is created when the object is
	clicked.
	
	The following code example illustrates use of the Hyperlink Button, Hyperlink
	Image, and Hyperlink Label objects.
	
	Sample Code
	-----------
	
	1. Create a program called Testlink.prg, using the following code:
	
	        * Begin Code
	        CLOSE ALL
	        SET CLASSLIB TO home()+"ffc\_hyperlink.vcx"
	        ohyperlinkobject=CREATEOBJECT('hyperform')
	        ohyperlinkobject.SHOW
	        READ EVENTS
	
	        DEFINE CLASS hyperform AS FORM
	           TOP           = 0
	           LEFT          = 0
	           HEIGHT        = 100
	           WIDTH         = 385
	           DOCREATE      = .T.
	           CAPTION       = "Use of the Hyperlink Class"
	           NAME          = "Form1"
	           SHOWTIPS      = .T.
	
	           ADD OBJECT _hyperlinklabel1 AS _hyperlinklabel WITH ;
	              LEFT       = 25, ;
	              TOP        = 10, ;
	              HEIGHT     = 25, ;
	              VISIBLE    = .T., ;
	              FONTNAME   = "Times New Roman", ;
	              FONTSIZE   = 14, ;
	              FONTITALIC = .T., ;
	              AUTOSIZE   = .T., ;
	              ctarget    = "WWW.MICROSOFT.COM/VFOXPRO", ;
	              CAPTION    = "FoxPro", ;
	              lnewwindow = .T., ;
	              NAME       = "_HYPERLINKLABEL1"
	
	           ADD OBJECT _hyperlinkcommandbutton1 AS _hyperlinkcommandbutton
	             WITH ;
	              LEFT       = 25, ;
	              TOP        = 50, ;
	              HEIGHT     = 25, ;
	              FONTNAME   = "MS Sans Serif", ;
	              FONTSIZE   = 12, ;
	              VISIBLE    = .T., ;
	              ctarget    = "WWW.MICROSOFT.COM", ;
	              CAPTION    = "Microsoft", ;
	              lnewwindow = .F., ;
	              NAME       = "_HYPERLINKCOMMANDBUTTON1"
	
	           ADD OBJECT _hyperlinkimage1 AS _hyperlinkimage WITH ;
	              LEFT       = 200, ;
	              TOP        = 0, ;
	              VISIBLE    = .T., ;
	              ctarget    = "WWW.MICROSOFT.COM/VFOXPRO", ;
	              PICTURE    = home(4)+"\BITMAPS\TLBR_W95\PROP.BMP", ;
	              STRETCH    = 2, ;
	              HEIGHT     = 50, ;
	              WIDTH      = 50, ;
	              lnewwindow = .T., ;
	              NAME       = "_HYPERLINKIMAGE1"
	
	           ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	              LEFT       =200, ;
	              HEIGHT     =25, ;
	              CAPTION    ="Clear Form", ;
	              TOP        =60, ;
	              WIDTH      =100, ;
	              NAME       = "Command1", ;
	              TOOLTIPTEXT= "Close this form"
	
	           PROCEDURE command1.CLICK
	              CLEAR EVENTS
	           ENDPROC
	
	        ENDDEFINE
	        * End Code
	
	2. In the Command window type the following:
	
	        DO TESTLINK
	
	3. Click the label, captioned "FoxPro", to launch an instance of the default Web
	  browser and navigate to the URL specified with the cTarget property.
	
	4. Click the Command button, captioned "Microsoft", to navigate to the URL
	  specified with the cTarget property without launching a new instance of the
	  Web browser.
	
	5. Click the Hyperlink Image to launch an instance of the default Web browser
	  and navigate to the URL specified with the cTarget property.
	
	REFERENCES
	==========
	
	Microsoft Visual FoxPro 6.0 Help; search on: "Hyperlink Button"; "Hyperlink
	Image"; "Hyperlink Label"; "Hyperlink Object"
	
	Additional query words: kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
