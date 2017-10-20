---
layout: page
title: "Q193849: INFO: WhatsThisHelp is Different in Visual FoxPro 6.0"
permalink: /kb/193/Q193849/
---

## Q193849: INFO: WhatsThisHelp is Different in Visual FoxPro 6.0

{% raw %}

	Article: Q193849
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The WhatsThisHelp function in previous versions of the Help engine provided a
	small pop-up with Help information. Visual FoxPro version 6.0 uses HTMLHelp,
	which causes WhatsThisHelp to display the same way as if Help were launched
	using the F1 key or from the FoxPro menu.
	
	MORE INFORMATION
	================
	
	The following code demonstrates how WhatsThisHelp displays. The code assumes
	that you have Help set to the FoxPro Help file (either Msdnvs98.col or
	FoxHelp.chm).
	
	When the form appears, click the WhatsThisHelp icon on the title bar of the form
	and then click the form. The ShowWhatsThis Help topic should appear.
	
	Sample Code
	-----------
	
	     ***Start of Code
	     frmWhatsThisHelp = createobject("xHTMLHelp")
	     frmWhatsThisHelp.show(1)
	
	     DEFINE CLASS xHTMLHelp AS form
	        Caption = "WhatsThisHelp"
	        MaxButton = .F.
	        MinButton = .F.
	        WhatsThisHelpID = 1342177719
	        WhatsThisHelp = .T.
	        WhatsThisButton = .T.
	     ENDDEFINE
	     ***End of Code
	
	REFERENCES
	==========
	
	Visual FoxPro 6.0 Help; search on: "SYS(1023)-Enable Help Diagnostic Mode";
	"SYS(1024)-Disable Help Diagnostic Mode"
	
	Additional query words: kbVFp600 kbContainer kbCtrl
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
