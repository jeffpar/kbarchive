---
layout: page
title: "Q158812: XFOR: ErrMsg: Postoffice NETWORK/PO Could Not Be Modified"
permalink: /kb/158/Q158812/
---

## Q158812: XFOR: ErrMsg: Postoffice NETWORK/PO Could Not Be Modified

{% raw %}

	Article: Q158812
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to modify a Microsoft Mail postoffice connection from the
	Microsoft Exchange Server Administrator program (Admin.exe), you may receive the
	following stop error message:
	
	  The postoffice NETWORK/PO could not be modified because either the MS Mail
	  Connector server is unavailable or there is insufficient memory available to
	  perform this operation.
	
	MORE INFORMATION
	================
	
	The registry entry for the postoffice is missing. Restore the registry key from
	backup or manually restore the registry value for the postoffice in question
	using the Registry Editor.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     SYSTEM/CurrentControlSet/Services/MSExchangeMSMI/Parameters/Admin
	
	3. Select this key to highlight it, click Edit, and click Add Value.
	
	4. Create the registry value with the following parameters:
	
	     Value Name: NETWORK/PO
	     Data Type: REG_SZ
	     String: \\Machine_name\Share /Z
	
	NOTE: For "NETWORK/PO" use the Network and Postoffice name for the postoffice in
	question. This data will be displayed in the Microsoft Mail Connector
	properties' Connections tab. For the String data, the example above is for
	Windows NT Server and LanManager compatible networks. For NetWare networks the
	path would be in the following format:
	
	  \\Server_name\Volume\Path_to_Maildata
	
	
	For more information on configuring the Microsoft Mail Connector for Microsoft
	Exchange Server refer to the Microsoft Exchange Server Administrator's Guide,
	Chapter 14. This information is also available on Books Online included with
	Microsoft Exchange Server.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
