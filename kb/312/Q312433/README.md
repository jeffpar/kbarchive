---
layout: page
title: "Q312433: XFOR: How to Use Mdbvu32.exe to Find and Remove a Delegate Rule"
permalink: /kb/312/Q312433/
---

## Q312433: XFOR: How to Use Mdbvu32.exe to Find and Remove a Delegate Rule

{% raw %}

	Article: Q312433
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 09-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Mdbvu32.exe utility to identify a delegate
	rule and remove the delegate rule from a mailbox.
	
	One scenario in which this behavior can occur is as follows: Non-delivery reports
	are generated when users send meeting requests to a mailbox, because that
	mailbox has a delegate user whose mailbox has been deleted.
	
	MORE INFORMATION
	================
	
	Mdbuvu32.exe is a message store viewer utility that uses Extended MAPI. You can
	find the utility in the Support\Utils\i386 folder on the Exchange Server 5.5
	CD-ROM.
	
	To identify a delegate rule and remove the delegate rule from a mailbox, follow
	these steps:
	
	1. Make sure that Outlook is not currently running on the workstation.
	
	2. Start the Mdbvu32.exe utility, and then click OK in the first dialog box, to
	  log on.
	
	3. On the MDB menu, click OpenMessageStore.
	
	4. Click the relevant mailbox, and then click Open to start the store.
	
	5. On the MDB menu, click Open Root Folder.
	
	6. Double-click "Top of Information Store" in the Child Folders area.
	
	7. Double-click Inbox in the Child Folders area to view the properties of the
	  Inbox folder.
	
	8. Locate the "Associated Message in FLD:" pane of the MAPI_FOLDER-Inbox window.
	  Notice the items that start with *pb EF 00 00 00 19 82 62. Each of these is a
	  rule that is set up on the Inbox. The user can set up some of the rules.
	  Other rules are for things like using the Out of Office Assistant or
	  forwarding meeting responses to a delegate.
	
	9. Double-click each of the rules in turn, to open the rule and examine the rule
	  to determine which rule is the delegate rule. Check the Message Property
	  0x65EB. The delegate rule should have the "Schedule + EMS Interface" for this
	  property.
	
	10. When you find the corresponding rule, check the message property 0x65EF,
	  which is a long, double-byte string of characters. If the string starts with
	  02, the rule states, "Send meeting requests and responses only to my
	  delegates, not to me." If the string starts with 01, the rule states,
	  "Delegate receives copies of meeting-related messages sent to me." If either
	  of these options is set in Outlook, and there is no message or rule under
	  "Associated Message in FLD:", the rule no longer exists, which explains why
	  the requests and responses are not being forwarded. You can also delete the
	  delegate rule from here.
	
	11. After you identify the delegate rule, select the rule in the "Associated
	  Message in FLD:" pane of the MAPI_FOLDER-Inbox window.
	
	12. In the "Operations available" box, click "lpFld->DeleteMessages()", and
	  then click Call Function.
	
	13. When the "MAPI_FOLDER-Inbox->DeleteMessages()" window appears, click OK
	  to delete the message.
	
	14. Quit Mdbvu32.exe by closing all windows until you return to the MDB Viewer
	  Test Application window.
	
	15. On the MDB menu, click Store Logoff, and then click OK.
	
	16. Click OK in the LOGOFF_COMPLETE window.
	
	17. Close the MDB Viewer Test Application window.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
