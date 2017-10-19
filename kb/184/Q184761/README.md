---
layout: page
title: "Q184761: HOWTO: Automate Internet Explorer 4 to Open a Specific Web Page"
permalink: /kb/184/Q184761/
---

## Q184761: HOWTO: Automate Internet Explorer 4 to Open a Specific Web Page

	Article: Q184761
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to use AppleScript to start an instance of Microsoft
	Internet Explorer 4.0 and automatically go to a valid website address.
	
	MORE INFORMATION
	================
	
	This example takes an Internet address stored in a file and uses AppleScript to
	start Internet Explorer 4.0, read the address from the file, and direct Internet
	Explorer to the desired address. The article assumes that Simple Text created
	the text file because the "Open For Access" command in AppleScript only reads
	files that have the TXT creator type. One can create a text file using FoxPro
	and later change the creator type. To do this, please refer to the article
	listed in the REFERENCES section.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a text file named ztest.txt, using the Simple Text application, that
	  contains the following Web address:
	
	  http://www.microsoft.com
	
	  Save the file to the root folder of your hard drive.
	
	2. Open the Apple Script Editor and type the following commands:
	
	        set filename to (open for access alias "HD_name:ztest.txt")
	        set mydata to (read filename)
	        close access filename
	        tell application "HD_name:Internet Explorer 4.0 Preview 1:Internet
	        Explorer 4.0" to run
	        tell application "HD_name:Internet Explorer 4.0 Preview 1:Internet
	        Explorer 4.0" to GetURL (mydata)
	
	  NOTE: Each line listed above should be type as a complete line within the
	  Apple Script Editor. To ensure that you have typed the Apple Script commands
	  correctly, press the Check Syntax button in the Apple Script Editor.
	
	  Please note that you must give a complete path to the text file and Internet
	  Explorer. If you do not, an error will occur. If you are not sure of the
	  exact path, press the Apple key and "F" to invoke the File Find dialog and
	  search for the application. In the example above, substitute the name of your
	  Macintosh hard drive for "HD_name" and specify the path where Internet
	  Explorer is installed.
	
	3. Save the AppleScript file as a Compiled Script type with the name ZIE4test to
	  the home folder of FoxPro.
	
	4. Run the Apple Script from FoxPro or Visual FoxPro using the following
	  command:
	
	        RunScript ZIE4test
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q109482 How to Change the Creator and Type Set by FCREATE()
	
	"ApplesScript Handbook 2nd Edition," Danny Goodman, Random House, pages 127-129,
	1994
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	Issue type        : kbhowto
	
	=============================================================================
	
