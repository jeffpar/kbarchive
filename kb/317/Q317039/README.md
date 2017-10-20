---
layout: page
title: "Q317039: Nothing Happens When You Double-Click the Modems Icon"
permalink: /kb/317/Q317039/
---

## Q317039: Nothing Happens When You Double-Click the Modems Icon

{% raw %}

	Article: Q317039
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg ocsso
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you double-click the Modems icon in Control Panel, the hourglass symbol may
	briefly appear, but the Modems Properties dialog box does not open.
	
	You may also notice the following event in the Event Viewer:
	
	  Event ID: 7028
	
	  Description:
	  The Control Registry key denied access to the system account program, so the
	  service control manager took ownership of the key.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps.
	
	NOTE: After you perform this procedure, you may need to reinstall your modem.
	
	1. Log on to the computer as Administrator.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Ports, and then delete all Component Object Model (COM) ports in
	  the Ports list. To do this, select a COM port in the Ports list, and then
	  click Delete. Click OK to confirm the removal of the port. When all COM ports
	  have been deleted, click Close.
	
	4. Quit Control Panel.
	
	5. Click Start, and then click Run.
	
	6. In the Open box, type "regedt32" (without the quotation marks), and then
	  click OK.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	7. In Registry Editor, click anywhere in the HKEY_LOCAL_MACHINE on Local Machine
	  window.
	
	8. Navigate to the following registry subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Modem\Enum
	
	9. Note the name of the modem key in the right pane of the Registry Editor
	  window. The modem key name is next to Root and is in the following format,
	  where <modem_key> is the name of the modem key:
	
	  Root\<modem_key>\0000
	
	  For example, the modem key for a generic 28.8-kilobits-per-second (Kbps) modem
	  (MDMGEN288) is displayed as follows:
	
	  0:REG_SZ:Root\MDMGEN288\0000
	  Count:REG_DWORD:0X1
	  NextInstance:REG_DWORD:0X1
	
	10. Navigate to the following registry subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum
	
	11. On the Security menu, click Owner.
	
	12. Ensure that Enum is displayed next to Registry Key, and then click Take
	  Ownership.
	
	13. On the Security menu, click Permissions.
	
	14. In the Name list, click Everyone.
	
	15. In the "Type of Access" list, click Full Control.
	
	16. Click to select the "Replace Permissions on Existing Subkeys" check box, and
	  then click OK.
	
	17. In the "Do you want to replace the permission on all existing subkeys within
	  Enum?" dialog box that appears, click Yes.
	
	18. Under the Enum subkey, double-click Root.
	
	19. Under the Root subkey, click the key with the name that you noted in step 9.
	  For example, if you noted MDMGEN288 in step 9, click the MDMGEN288 key that
	  is displayed under the Root subkey.
	
	20. On the Registry menu, click Save Key.
	
	21. In the "File name" box, type "saved modem key" (without the quotation
	  marks), and then click Save.
	
	  NOTE: You can restore this registry subkey by double-clicking the "saved
	  modem key.reg" file that you created.
	
	22. On the Edit menu, click Delete, and then click Yes to confirm the deletion.
	
	23. On the Registry menu, click Exit.
	
	24. Restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg ocsso 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
