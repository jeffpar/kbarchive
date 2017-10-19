---
layout: page
title: "Q264159: XADM: Uninstalling Mailbox Manager Service Leaves Mailbox"
permalink: /kb/264/Q264159/
---

## Q264159: XADM: Uninstalling Mailbox Manager Service Leaves Mailbox

	Article: Q264159
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you uninstall the Exchange Server Mailbox Manager service, there may still
	be mailbox resources left behind for this service.
	
	MORE INFORMATION
	================
	
	The first time that the Mailbox Manager service is started, the Mailbox Manager
	service creates a mailbox on the server that is called "Microsoft Exchange
	Server Mailbox Manager for <server_name>."
	
	If you simply uninstall the Mailbox Manager service, you do not remove this
	mailbox from the Mailbox Resources container.
	
	If you click the mailbox, you receive the following error message:
	
	  The object cannot be found in the directory. This may be because replication
	  has not completed.
	  Microsoft Exchange Directory
	  ID no: c1010aae.
	
	To remove this mailbox, you need to use the Exchange Server Administrator program
	in raw mode.
	
	WARNING: If you use the raw mode of the Exchange Server Administrator program
	(admin /r) incorrectly, serious problems may occur that may require you to
	reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk.
	
	To remove the mailbox:
	
	1. Start the Exchange Server Administrator program in raw mode by typing the
	  following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. Connect to the server that the mailbox that you want to remove is located on.
	
	3. Locate the Mailbox Resources container in which the mailbox you want to
	  delete is located. The Mailbox Resources container has a parent container
	  that is called the Private Information Store container. Click the Private
	  Information Store container, and then click Raw Properties on the File menu.
	
	4. Under the object attributes, click Obj-Dist-Name, and then select the entire
	  value under Edit Value. Make sure that you have selected the entire value,
	  and then press CTRL+C to copy that value. The value should look very similar
	  to the following:
	
	  (/o=<organization>/ou=<site>/cn=Configuration/cn=Servers/cn=<server_name>/cn=Microsoft
	  Private MDB)
	
	  Note that only your <organization>, <site>, and
	  <server_name> values should be different. Click Cancel.
	
	5. Click the Add-ins container, click New on the File menu, click Other, and
	  then click Raw Object.
	
	6. Click Mailbox, and then click OK.
	
	7. Click Delivery Mechanism, type "0" (without the quotation marks) in the Edit
	  Value box, and then click Set.
	
	8. Click Directory Name, type "MCAserver_name" (without the quotation marks) in
	  the Edit Value box, and then click Set (where server_name is the name of your
	  server). For example, if your server is named MICROSOFT1, you would type
	  "MCAMICROSOFT1" (without the quotation marks).
	
	9. Under "List attributes of type", click NonExisting.
	
	10. Under Object Attributes, click Home-MDB.
	
	11. In the Edit Value box, paste the full distinguished name of the home
	  Messaging Database (MDB) where the mailbox that you want to delete is
	  located (this is the data that you copied in step 4). To paste this full
	  distinguished name in the Edit Value box, press CTRL+V. Click Set.
	
	12. Click Apply, and then click OK.
	
	13. In the Add-Ins container, click the MCA<server_name> object, and then
	  press the DELETE key. Click Yes to confirm the deletion.
	
	14. Look in the Mailbox Resources container. The "Microsoft Exchange Server
	  Mailbox Manager for <server_name>" mailbox should be gone. You need to
	  update the screen by pressing the F5 key before the mailbox disappears.
	
	
	Additional query words: c1010aae
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
