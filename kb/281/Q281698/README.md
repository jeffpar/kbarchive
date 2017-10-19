---
layout: page
title: "Q281698: FIX: Error When You Run EXE Remotely Using UNC Name with Spaces"
permalink: /kb/281/Q281698/
---

## Q281698: FIX: Error When You Run EXE Remotely Using UNC Name with Spaces

	Article: Q281698
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbAppSetup kbvfp600 kbGrpDSFox kbDSupport kbVS600sp5 kbVS600sp5fix
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you remotely run an executable (.exe) file built in Visual FoxPro, using a
	universal naming convention (UNC) name tha contains spaces, you may receive the
	following error message:
	
	  File <filename> does not exist.
	
	The number of characters in the UNC name does not seem to matter; the spaces in
	the name cause the error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Build a Visual FoxPro executable file.
	
	2. On another computer, place the file in a folder called "Folder With Spaces"
	  (without quotation marks).
	
	NOTE: You can also add the folder to your local computer; just make sure that you
	use the UNC name of the local computer to run the executable file.
	
	3. Click Start, click Run, and then type the following (including the quotes):
	
	  "\\<unc name>\Folder With Spaces\<exe name>"
	
	The error message mentioned in the "Symptoms" section appears.
	
	4. In Windows Explorer, remove the spaces from the "Folder With Spaces" name,
	  and then repeat Step 3 using the new path.
	
	The executable file runs without error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAppSetup kbvfp600 kbGrpDSFox kbDSupport kbVS600sp5 kbVS600sp5fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
