---
layout: page
title: "Q263089: WD97: &quot;This Is Not a Valid Filename&quot; Saving to Floppy Disk Drive"
permalink: /kb/263/Q263089/
---

## Q263089: WD97: &quot;This Is Not a Valid Filename&quot; Saving to Floppy Disk Drive

{% raw %}

	Article: Q263089
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97; :4.0
	Operating System(s): 
	Keyword(s): kbdta wd2000
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to save a Word document to a locally mapped floppy disk, you
	may receive the following error message:
	
	  This is not a valid filename.
	
	CAUSE
	=====
	
	This problem occurs when all of the following are true:
	
	- You are using Microsoft Windows NT Terminal Server version 4.0.
	
	  -and-
	
	- Microsoft Windows NT Terminal Server version 4.0, Service Pack 5 is
	  installed.
	
	  -and-
	
	- You are using Citrix Metaframe version 1.8 or earlier.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Windows NT Terminal Server version
	4.0, Service Pack 6 or later.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	WORKAROUND
	==========
	
	Method 1: Remap the Local Disk to a Different Drive Letter
	----------------------------------------------------------
	
	If you cannot update to Service Pack 6 or later, map your local floppy disk to a
	different drive letter. Map to the local disk drive by using the workstation's
	Computer Name as configured in the Network icon in Control Panel.
	
	Use a Net Use command similar to the following to map your local disk drive:
	
	  Net Use B: \\ExampleServer\Documents
	
	NOTE: Please contact your Citrix Metaframe vendor for more information about
	remapping your local disk drive to work around this problem.
	
	For information about how to contact Citrix Systems, click the appropriate
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Method 2: Use the Mup.sys File from Service Pack 4
	--------------------------------------------------
	
	If you do not have Microsoft distributed file system (Dfs) installed, you can
	replace the Terminal Server Service Pack 5 version of the Mup.sys file with the
	Terminal Server Service Pack 4 version of the Mup.sys file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Windows NT Terminal Server, version 4.0, Service Pack 6.
	
	MORE INFORMATION
	================
	
	For additional information about a related problem, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q249255 Cannot Insert File Attachment from Locally Mapped Drive in Microsoft
	  Office
	
	
	Additional query words: sp6
	
	======================================================================
	Keywords          : kbdta wd2000 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97; :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
