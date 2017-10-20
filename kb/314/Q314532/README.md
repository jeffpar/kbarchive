---
layout: page
title: "Q314532: XWEB: Troubleshooting Blank Message Bodies in Outlook Web Access"
permalink: /kb/314/Q314532/
---

## Q314532: XWEB: Troubleshooting Blank Message Bodies in Outlook Web Access

{% raw %}

	Article: Q314532
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to troubleshoot Exchange Server if an Exchange Server
	user can successfully use Microsoft Outlook Web Access (OWA) to open the Inbox,
	but cannot see the body of a message.
	
	MORE INFORMATION
	================
	
	First Issue
	-----------
	
	To properly function, OWA requires read, write, and delete access to the WebTemp
	and System Temp folders. If a user sees blank bodies in messages, the user's
	Microsoft Windows NT account might not have read, write, and delete access to
	the system Temp folder on the server.
	
	Changing the Location of Your Server's Temp Folder:
	
	The Temp folder on your server might be in a location that you do not want to
	grant the Everyone group read, write, and delete access to (for example,
	C:\Winnt\Temp). To move your server's Temp folder to a more secure location, use
	the procedure that is appropriate to your server's operating system:
	
	- For Windows NT 4.0:
	
	  1. Right-click My Computer, and then click Properties.
	
	  2. Click the Environment tab.
	
	  3. If your server has the TMP value, select the value for TMP in the System
	     pane. If your server does not have the TMP value, select any other
	     variable in the System pane, and then type "TMP" (without the quotation
	     marks) in the Variable Name box at the bottom of the dialog box.
	
	  4. Type the location of your Temp folder in the Variable Value box, and then
	     click Set.
	
	  5. Click Apply, and then click OK to close the dialog box.
	
	  6. You must restart your server for the changes to take effect.
	
	- For Microsoft Windows 2000:
	
	  1. Right-click My Computer, and then click Properties.
	
	  2. Click the Advanced tab, and then click Environment Variables.
	
	  3. Under "System variables" section, select the value for TMP and then click
	     Edit. If your server does not have a value for TMP, click New, and then
	     type "TMP" (without the quotation marks) in the Variable Name box in the
	     dialog that is displayed.
	
	  4. Type the location of your Temp folder in the Variable Value box, and then
	     click Set.
	
	  5. Click OK, and then click OK in the System Properties dialog box to close
	     it.
	
	  6. You must restart your server for the changes to take effect.
	
	Granting the Everyone Group Read, Write, and Delete Access to the Temp Folder:
	
	To grant the Everyone group read, write, and delete access to the Temp folder,
	use the procedure that is appropriate to your server's operating system:
	
	- For Windows NT 4.0:
	
	  1. Use Microsoft Windows Explorer to find your server's system Temp folder.
	
	  2. Right-click the Temp folder, and then click Properties.
	
	  3. Click the Security tab, and then click Permissions.
	
	  4. Select Everyone, and then click Remove.
	
	  5. Click Add, and then double-click the Everyone group so that it is
	     displayed in the lower pane. Grant the Everyone group Full Control access,
	     and then click OK.
	
	  6. In the main Permissions dialog box, select the Everyone group again, and
	     then click Special Directory Access in the Select box in the lower portion
	     of the dialog box.
	
	  7. Click Other, and then click to select the Read, Write, and Delete check
	     boxes and make sure that all of the rest of check boxes are clear. Click
	     OK to close the Permissions dialog box.
	
	  8. Click OK to close the Properties dialog box.
	
	- For Windows 2000:
	
	  1. Use Windows Explorer to find your server's system Temp folder.
	
	  2. Right-click the Temp folder, and then click Properties.
	
	  3. Click the Security tab.
	
	  4. If the "Allow inheritable permissions from parent to propagate to this
	     object" check box is selected, click to clear it. In the dialog box that
	     is displayed, click Copy.
	
	  5. Select the Everyone group, and then click Remove.
	
	  6. Click Advanced, click Add, and then click the Everyone group. Click OK.
	
	  7. In the Allow column, click to select the following check boxes:
	
	      - "List folder/read data"
	
	      - "Read attributes"
	
	      - "Read extended attributes"
	
	      - "Create files/write data"
	
	      - "Create folders/append data"
	
	      - "Write attributes"
	
	      - "Write extended attributes"
	
	      - "Delete subfolders and files"
	
	     Make sure that all of the rest of the check boxes are clear.
	
	  8. Click OK to close the Permission Entry dialog box, click OK to close the
	     Advanced dialog box, and then click OK to close the Properties dialog box.
	
	Second Issue
	------------
	
	Users might also see blank message bodies in OWA if the Exchange Server 5.5.
	post-Service Pack 4 (SP4) OWA fixes that are described in the following
	Microsoft Knowledge Base article are installed on a server on which the minimum
	required version of Microsoft Internet Explorer is not installed:
	
	  Q313576 XGEN: Exchange Server 5.5 Post-SP4 Outlook Web Access Fixes
	
	To resolve this issue, install the minimum required version of Internet Explorer
	on the server, and then restart the World Wide Web Publishing service. The
	minimum required version of Internet Explorer is Microsoft Internet Explorer
	version 5.0, but Microsoft recommends that all OWA servers be upgraded to
	Microsoft Internet Explorer version 5.5 Service Pack 2 (SP2) or later.
	
	Third Issue
	-----------
	
	Virus-scanning software that runs on the server might deny access to a message
	with attachments until the attachments are properly scanned. If a server is
	under heavy stress, users might not see the bodies of such messages until the
	attachments pass through the virus-scanning queue. The user will be able to open
	the message after the virus scan for the attachment is finished. If this is the
	cause of the issue, the user also cannot see the attachment by using other
	means, such as Microsoft Outlook.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbhowto
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
