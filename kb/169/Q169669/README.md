---
layout: page
title: "Q169669: XADM: Admin Can't Delete/Return Msgs to MS Mail Postoffice"
permalink: /kb/169/Q169669/
---

## Q169669: XADM: Admin Can't Delete/Return Msgs to MS Mail Postoffice

{% raw %}

	Article: Q169669
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You are a legitimate administrator of Microsoft Exchange Server computers but
	are unable to delete messages in the Microsoft Mail Connector queues or return
	them to downstream Microsoft Mail postoffices.
	
	CAUSE
	=====
	
	The reason for this is that you must be a part of the local Windows NT
	Administrators group. The SC_MANAGE_ALL right is required to administer objects
	in the Microsoft Mail Connector property page. This right is only associated
	with users in the Windows NT Administrators group.
	
	WORKAROUND
	==========
	
	To work around this problem,
	
	- Add yourself to the Windows NT Administrators group on the server you are
	  trying to administer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This fix will allow users who are not members of the Windows NT Administrators
	group to delete and return messages that are in the queues to downstream
	Microsoft Mail postoffices. These users will still not be able to add, delete,
	or modify PC MTAs (or any object that requires remote registry access). This
	option still requires SC_MANAGE_ALL rights.
	
	To install the new file:
	
	1. Make a backup copy of the file from the Exchsrvr\Add-Ins\Ms\<Platform>\
	  and Exchsrvr\Connect\Msmcon\Bin directories.
	
	2. Copy the replacement file, Conadmin.dll, to the above directories.
	
	3. Start the Microsoft Exchange Server Administrator program in raw mode with
	  the /r switch. (Open the Microsoft Exchange Server Administrator program
	  pointing to the Microsoft Exchange Server computer that has the Microsoft
	  Mail Connector.)
	
	4. Select the 'Extension for MS Mail Connector' in the <Organization>/
	  <Site>/Configurations/Add-Ins container.
	
	5. On the File menu, click Raw Properties.
	
	6. Select the attribute File-Version.
	
	7. In the Edit Value box, replace the value with the following string and press
	  the Set button to make the changes.
	
	  0300B30500000500
	
	This changes the version stamp of the file in the directory.
	
	After replacing the Conadmin.dll and modifying the version stamp, administrators
	who are not Windows NT administrators should be able to delete/return messages
	from the Microsoft Mail Connector queues.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
