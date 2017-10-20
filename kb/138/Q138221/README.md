---
layout: page
title: "Q138221: Problems Creating Partitions w/ Arcinst.exe in Windows NT 3.51"
permalink: /kb/138/Q138221/
---

## Q138221: Problems Creating Partitions w/ Arcinst.exe in Windows NT 3.51

{% raw %}

	Article: Q138221
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT 3.51 or 4.0 on a DEC Alpha computer and want to
	format and partition your hard disk before performing the installation, do not
	use the Arcinst.exe utility that is supplied on the compact disc. When you use
	this version of Arcinst.exe, all partitions are created as system partitions.
	This causes an error when you try to install Windows NT.
	
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	- Use the Windows NT 3.5 version of Arcinst.exe if available.
	
	  -or-
	
	- Download the corrected version of Arcinst.exe from
	
	  http://www.windows.digital.com/support/drivers/drivers.asp
	
	  -or-
	
	- Follow these steps:
	
	  1. Start your Alpha computer to the ARC Console.
	
	  2. Select the Supplementary menu.
	
	  3. Select Set Up the System.
	
	  4. Select Edit Environment Variables (you should see "Name").
	
	  5. Type Systempartition and press ENTER.
	
	  6. Press the HOME key, and then press the DELETE key to remove everything on
	     the line up to and including the last semicolon.
	
	  7. Press ENTER, and then press ESC.
	
	  8. Save the changes.
	
	  9. Install Windows NT.
	
	NOTE: Additional information can be obtained from DEC Technical Support at (800)
	354-9000 or the Alpha AXP Firmware and ECU Readme.txt found in the DEC4WNT forum
	on CompuServe.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: arcinstall
	
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Hardware          : ALPHA
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
