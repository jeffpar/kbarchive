---
layout: page
title: "Q184218: Formexit.exe EXIT Command May Leave Form Object Visible"
permalink: kb/184/Q184218/
---

## Q184218: Formexit.exe EXIT Command May Leave Form Object Visible

	Article: Q184218
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbfile kbvfp
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Formexit.exe is a sample file that that shows how adding an EXIT command to a
	FOR...NEXT loop that iterates through a series of Application.Form objects can
	leave a form object on the desktop. The example also provides a workaround to
	the problem.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Formexit.exe
	  (http://download.microsoft.com/download/vfox50/Sample2/1/W9X/EN-US/Formexit.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	This example has three forms, One, Two, and Three that sequentially appear. In
	the Activate event code of each form, a FOR...NEXT loop uses the
	Application.Form object to check if a form exists and changes the Caption
	property of a label object. If the FOR...NEXT loop is terminated by an EXIT
	command, it prevents Visual FoxPro from discarding the first form, and the form
	is left in memory.
	
	To work around this problem, remove the EXIT command from the FOR...NEXT loop.
	This change allows the loop to complete, and the first form disappears.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy the Formexit.exe file to a directory on your system and run it to
	  extract the sample files.
	
	2. To run the application and follow the instructions on the forms that appear,
	  type the following in the Command window: " DO Formexit.app " (without the
	  quotation marks) After following the instructions, the form titled One
	  remains on the desktop.
	
	3. To exit the example, activate form Three and press the Clear Events button.
	  Activate the Command window by pressing the CTRL and F2 keys simultaneously
	  and type "CLEAR ALL" (without quotes) in the Command window.
	
	4. To implement the workaround, modify the project, open Frmone and open the
	  Activate event. Comment the EXIT command by placing an asterisk (*) character
	  in front of the line.
	
	5. Repeat the same steps to the other two forms.
	
	6. Rebuild the application and run the application file. Notice that Frmone now
	  closes properly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbinfo
	
	=============================================================================
	
