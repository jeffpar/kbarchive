---
layout: page
title: "Q258958: XADM: Move Server Wizard Won't Update Mailbox Folder Permissions"
permalink: /kb/258/Q258958/
---

## Q258958: XADM: Move Server Wizard Won't Update Mailbox Folder Permissions

{% raw %}

	Article: Q258958
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp2 exc55sp3
	Last Modified: 07-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you run the Move Server Wizard, mailbox folder permissions and delegate
	access may no longer function properly.
	
	CAUSE
	=====
	
	This issue can occur because the Move Server Wizard does not attempt to update
	folder access or delegate access, other than to make sure that the mailbox owner
	can gain access to his or her mailbox after the move.
	
	WORKAROUND
	==========
	
	To work around this issue, re-establish any delegate access or permissions that
	were lost when you ran the Move Server Wizard by re-applying the settings from
	the client.
	
	If you use the Mailbox Information Program (MBInfo) version 2.01 or later, you
	can create a comma-separated values (CSV) file that contains folder permissions
	for most of the folders in the information store. (For information about exactly
	which folder permissions are exported to the file, see the documentation for
	MBInfo.)
	
	When delegate access is granted, some folder permissions are usually granted as
	well, so the folder permission information from MBInfo should include any
	mailboxes that have granted delegate access to others. The output does not
	explicitly show the access as delegate access; the output only shows the folder
	permissions that are granted in conjunction with the delegate access.
	
	The information that you extract with MBInfo provides a list of mailboxes. You
	can determine if permission and delegate settings are correct for these
	mailboxes, and if they are not, you can either re-apply the appropriate settings
	or notify users that they may need to re-apply these settings themselves.
	
	You can obtain MBInfo from Microsoft Product Support Services (PSS). Microsoft
	PSS will use commercially reasonable efforts in addressing all support problems
	with MBInfo.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Folder permissions are stored as properties of a folder and are granted to a
	mailbox (not a Windows NT account). When you grant another mailbox permission
	for a folder, the Distinguished Name (DN) of the mailbox that you are granting
	permissions to is stored on the folder to which that mailbox will have access.
	
	A mailbox DN is similar to the following:
	
	  /o=Organization/ou=Site/cn=Recipients/cn=MailboxDirectoryName
	
	After you run the Move Server Wizard and change the organization or site name,
	mailboxes on the server that you moved have a different DN than they had before
	the move. This means that the mailbox DN does not match the DN that is stored on
	the folder, so access to the folder no longer works properly. When you remove
	and re-apply the permissions, you use the new mailbox DN and permissions are
	re-established.
	
	The Move Server Wizard does not check all of the folders to make sure the
	permissions are updated. You can grant any mailbox in the organization
	permission for your folders. If the Move Server Wizard maintained all of the
	folder permissions, the Move Server Wizard would need to check the information
	stores of all of the servers in the organization to see if the mailboxes on the
	server that the Move Server Wizard was moving had permissions for any mailbox
	folders, and then update those permissions accordingly (which is nearly
	impossible to do).
	
	In some situations, folder permissions between two mailboxes that both reside on
	the server that you are moving may be maintained, but this does not always
	happen and is not something that you should rely on.
	
	Additional query words: pilgrim X500
	
	======================================================================
	Keywords          : exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
