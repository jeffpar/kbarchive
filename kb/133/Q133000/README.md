---
layout: page
title: "Q133000: BUG: Graphical Help Won t Run When EXE Installed on a Network"
permalink: kb/133/Q133000/
---

## Q133000: BUG: Graphical Help Won t Run When EXE Installed on a Network

	Article: Q133000
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an executable with help files is installed on a network server from a
	workstation that does not have FoxPro installed, the executable can[ASCII 146]t
	access its help files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create an executable and a Windows-style help file.
	
	2. Place Microsoft Help and FoxPro Help and your Help file in the same folder
	  with the executable.
	
	3. Use the Setup Wizard to create diskettes. Do not check graphical help.
	
	  For more information about Help in an Executable, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q130409 PRB: Help Not Invoked in an Executable
	
	4. From a Macintosh that does not have FoxPro installed, install the diskettes
	  by double clicking Installer on the first diskette.
	
	5. Choose a folder on a Novell or Windows NT server as the destination folder.
	
	6. Run the executable, and press F1 to invoke help. The help file is not called.
	  If the same executable is installed locally to that Macintosh, the executable
	  is able to call the help file.
	
	REFERENCES
	==========
	
	"User's Guide: Microsoft FoxPro Distribution Kit for Macintosh", p. 29.
	
	Additional query words: vFoxMac FoxMac buglist2.60a
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	
	=============================================================================
	
