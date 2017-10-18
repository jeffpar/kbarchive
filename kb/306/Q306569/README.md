---
layout: page
title: "Q306569: Non-U.S. User Cannot Set Up An MSN Internet Access Account After"
permalink: kb/306/Q306569/
---

## Q306569: Non-U.S. User Cannot Set Up An MSN Internet Access Account After

	Article: Q306569
	Product(s): The Microsoft Network
	Version(s): 6.0,6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 6.0, 6.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You install a non-U.S. version of Windows XP. You click Cancel when prompted to
	sign up for internet access. After installation and Setup is complete, you try
	to set up a MSN Internet Access account via the Network Connection Wizard. You
	cannot create an account.
	
	CAUSE
	=====
	
	This is a known issue.
	
	RESOLUTION
	==========
	
	Delete the HKEY_CURRENT_USER\Software\Microsoft\Internet Connection Wizard
	registry key and uninstalling MSN Explorer, and then reinstall MSN Explorer.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk. It is strongly suggested that you back up the
	Registry before editing it. For information on how to back up the Registry,
	start the Registry Editor, click Help , and look for the topics Backing up the
	Registry and Restoring the Registry. Alternately, call Technical Support for
	assistance.
	
	To resolve this issue
	
	1. Click Start, and then point to Run.
	
	2. Type regedit, and then click OK.
	
	3. Expand the HKEY_CURRENT_USER key.
	
	4. In the expanded list, expand the Software folder.
	
	5. In the expanded list, expand the Microsoft folder.
	
	6. In the expanded list, select Internet Connection Wizard.
	
	7. In the top menu of the window, click File, and then click Delete.
	
	8. In the box that appears, click Yes.
	
	9. Quit the registry editor.
	
	10. Click Start, and then point to Control Panel.
	
	11. Double-click the Add/Remove programs icon.
	
	12. Click Add/Remove Windows Components.
	
	13. In the list of components, clear the box next to MSN Explorer, and then
	  click OK.
	
	14. Do one of the following:
	   - If asked to reboot the computer, click Yes.
	
	   - Otherwise, click Start, and then click Shut Down to manually shut down and
	     restart your computer.
	
	15. After the computer has restarted, repeat steps 10-14, but this time, select
	  MSN Explorer in step 13.
	  Note: You may have to restart Windows again.
	
	16. After Windows has restarted, click Start, point to Programs, and then click
	  the MSN Explorer icon.
	  You can now use the signup pages to set up a MSN Internet Access account.
	
	Additional query words: kbimu; MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN600 kbMSN610
	Version           : :6.0,6.1
	Issue type        : kbprb
	
	=============================================================================
	
