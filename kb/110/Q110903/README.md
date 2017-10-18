---
layout: page
title: "Q110903: Mac Gen: Summary List of Mail 3.1 Bugs"
permalink: kb/110/Q110903/
---

## Q110903: Mac Gen: Summary List of Mail 3.1 Bugs

	Article: Q110903
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is a list of bugs confirmed in version 3.1 of Microsoft Mail for
	AppleTalk Networks. This is not a comprehensive list; this list is current as of
	January 1, 1994.
	
	For more information on the bug listed, query in the Microsoft Knowledge Base on
	the article ID or the bug number.
	
	BUG LISTING FOR VERSION 3.1
	---------------------------
	
	- Mac Fax: Creating Fax Gateway Account Cover Pages
	
	- Mac Fax: Fax Gateway Cover Pages and Mail Server Application
	
	- Mac Svr Wkst: Compatibility with A/UX
	
	- Mac ARA: AppleLink Gateway Conflicts with ARA
	
	- Mac GW: CNU Needs MultiFinder
	
	- Mac Wkst: Message Summary Screen Not Displayed
	
	- Mac Tool: Errors Saving Enclosures After Rebuild
	
	- Mac Admin: Lost Details of GWRecips in PAB
	
	- Mac Wkst: Enclosed Documents Become Unlocked
	
	- Mac GW: MS Mail GW Does Not Reselect Server on Restart
	
	- Mac Wkst: Mail Notification Has Stopped Working
	
	- Mac GW: Details Unavailable for Gateway Users
	
	Mac Fax: Creating Fax Gateway Account Cover Pages:
	
	Article ID: Q81342
	
	You can configure the Microsoft Mail for AppleTalk Networks Gateway to Fax to
	send a cover page with each fax transmission. You need to first create a cover
	page using any non-PostScript application that has printing capabilities.
	
	1. Leave the top 2 to 3 inches of the document blank because transmission
	  information is placed at the top of the page when a cover page is used.
	
	2. In the Chooser, select MailSender.
	
	3. Print the document. When the MailSender print dialog opens, click the Save
	  File radio button.
	
	4. When the "Save Image File As" dialog appears, click the Formats button and
	  select "FAXGATE Cover Page" from the list of formats. Save the file and copy
	  it to the master Fax gateway server's hard disk where it will be safe from
	  accidental deletion.
	
	5. At the Macintosh serving as the master Fax gateway server, sign into Mail as
	  the Network Manager.
	
	6. Choose Gateway Accounts from the Mail menu and click the Modify radio button.
	
	7. Select a gateway account.
	
	8. Click the Cover Page button and select any cover page file that you have
	  previously created. Each gateway account can have a unique cover page
	  assigned to it. Repeat Steps 7 and 8 to set the cover page for other gateway
	  accounts.
	
	Mac Fax: Fax Gateway Cover Pages and Mail Server Application:
	
	Article ID: Q81346
	
	When running the Microsoft Mail server as an application, the Mail for AppleTalk
	Networks gateway does not allow you to make changes to cover page assignments.
	Changes to the cover page option are made in the Gateway Accounts screen and
	must be made at the server. Even when sitting at the server, you will receive
	the following error after clicking on the Cover Page button:
	
	  You are not allowed to assign cover pages from a remote machine
	
	To make changes to the cover page option, bring the server up as an INIT, make
	the desired changes, change the server back to an application.
	
	Mac Svr Wkst: Compatibility with A/UX:
	
	Article ID: Q96253
	
	Although the workstation of version 3.1 of Microsoft Mail for AppleTalk Networks
	is compatible with Apple's A/UX environment, the server is not compatible.
	Earlier versions of the Mail workstation are not compatible.
	
	The only known problem with A/UX and the version 3.1 workstation is that the
	chime will only sound once on the arrival of new mail, even if set to 2 or 3
	chimes.
	
	Mac ARA: AppleLink Gateway Conflicts with ARA:
	
	Article ID: Q96275
	
	The communication program in the AppleLink gateway will not function correctly
	with AppleTalk Remote Access (ARA) version 1.0. If ARA is installed on the
	server with an AppleLink master gateway and the communication program in the
	AppleLink gateway tries to initiate a call, the following error message will
	occur:
	
	  Ramsdopen: -97
	
	Mac GW: CNU Needs MultiFinder:
	
	Article ID: Q97956
	
	The Connection Name Utility (CNU) of the Microsoft Mail Connection for PC and
	AppleTalk Networks version 1.0x needs to run on a mail server using System 7 or
	System 6 with MultiFinder enabled. With System 6, operating with Finder only may
	cause errors.
	
	Mac Wkst: Message Summary Screen Not Displayed:
	
	Article ID: Q98782
	
	When using version 3.1 of Microsoft Mail for AppleTalk Networks, the Message
	Summary screen may disappear so that only the menu bar displays. This problem
	may occur after you click the zoom box or after you launch Mail.
	
	Mac Tool: Errors Saving Enclosures After Rebuild:
	
	Article ID: Q99305
	
	When attempting to save an enclosure attached to a message with version 3.1 of
	Microsoft Mail for AppleTalk Networks, the following error message may be
	displayed:
	
	  Couldn't write file.
	
	It is also possible when transferring the mail message to a local folder for the
	following error message to be displayed:
	
	  Sorry, the server was unable to complete the transfer. Please try again.
	
	Mac Admin: Lost Details of GWRecips in PAB:
	
	Article ID: Q99689
	
	Either of the following messages may be displayed immediately after moving a user
	with the Move User feature of the Mail Network Administrator program with
	version 3.1a of Microsoft Mail for AppleTalk Networks.
	
	- When selecting a gateway recipient from the Personal Address Book and
	  clicking the Details button, the following error message appears:
	
	  Unable to retrieve details for that item
	
	- When mailing to a gateway recipient selected from the Personal Address Book,
	  the message is immediately returned undeliverable with the following
	  message:
	
	  Could not be delivered because the recipient(s) have been removed
	
	Mac Wkst: Enclosed Documents Become Unlocked:
	
	Article ID: Q101445
	
	If a document enclosed within a mail message using version 3.0 or 3.1 of
	Microsoft Mail for AppleTalk Networks has the Locked feature enabled via the Get
	Info box, that document will arrive at the recipient's mail account unlocked.
	
	Mac GW: MS Mail GW Does Not Reselect Server on Restart:
	
	Article ID: Q101446
	
	When using version 3.1 of Microsoft Mail for AppleTalk Networks, the server may
	stop processing mail for a gateway. Mail will queue in the Microsoft Mail Data
	file, which can be viewed with the Mail Network Administrator program, and will
	not be transported to the gateway service. This problem will occur after any
	restart of the machine, most commonly after a backup has taken place
	
	Mac Wkst: Mail Notification Has Stopped Working:
	
	Article ID: Q101904
	
	In versions 3.0 and 3.1 of Microsoft Mail for AppleTalk Networks, the workstation
	Notifier may stop working. This includes the chime, flashing menu bar, and
	Notifier window.
	
	Mac GW: Details Unavailable for Gateway Users:
	
	Article ID: Q103943
	
	The Details button in the Addressing screen is unavailable (grayed) after a
	gateway recipient has been selected.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : :3.1
	
	=============================================================================
	
