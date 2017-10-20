---
layout: page
title: "Q285366: XADM: High Store CPU Use Causes MTA Queue to Priv.edb to Grow"
permalink: /kb/285/Q285366/
---

## Q285366: XADM: High Store CPU Use Causes MTA Queue to Priv.edb to Grow

{% raw %}

	Article: Q285366
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 14-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An Exchange Server client or Exchange Server administrator may notice a delay in
	the arrival of new messages. If you use Task Manager or Microsoft Windows NT
	Performance Monitor to examine the Exchange Server computer more closely, the
	information store process CPU utilization is between 90 and 100 percent and the
	message transfer agent (MTA) work queue to the private information store
	continues to grow.
	
	If you use Performance Monitor to look at each individual thread for the
	information store process (Store.exe), a series of threads is each consuming a
	portion of the total CPU time. The MTA queue in the Exchange Server
	Administrator program may also show many messages with the same MTS-ID that are
	waiting to be delivered to the private information store.
	
	CAUSE
	=====
	
	This problem can occur if a user sends a message or meeting request to multiple
	recipients who are on multiple Exchange Server computers, and the user requests
	a delivery receipt or read receipt. As each copy of the message is received, the
	Exchange Server computer sends back the delivery receipt or read receipt (as
	applicable). Some or all of these delivery receipts or read receipts arrive back
	at the originator's home server at approximately the same time, which causes
	several of these messages to be adjacent in the processing order of the MTA
	queue. The MTA then attempts to deliver the delivery receipts or read receipts
	to the database a few at a time. At this point, Store.exe attempts to associate
	the delivery receipt or read receipt with the original message in the
	originator's mailbox.
	
	For example, four copies of the same delivery receipt or read receipt might be
	delivered at the same time. Because all four messages are attempting to locate
	the same message, the messages are all simultaneously trying to navigate the
	same pages in the database to locate the original message.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Exchange Server service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: JET
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Ese.dll   | 5.5.2654.91 | 
	+-------------------------+
	
	
	
	WORKAROUND
	==========
	
	To work around this problem if it occurs with delivery receipts and read
	receipts in conjunction with sending mail to a distribution list (DL), set the
	"do not send any reports back to someone who requests them" option. On new
	distribution lists, the "Report to Message Originator" option is enabled by
	default. If you are experiencing this problem, consider disabling the "Report to
	Message Originator" option on any DLs if a delivery receipt or read receipt is
	not necessary. This option keeps users who automatically request delivery
	receipts or read receipts from getting flooded with receipts when those users
	accidentally request receipts when sending a message to a DL.
	
	To disable the "Report to Message Originator" option on a DL, in the Exchange
	Server Administrator program, click to clear the "Report to Message Originator"
	check box on the Advanced tab of the DL.
	
	NOTE: When the "Hide Membership From Address Book" option is selected, the
	"Report to Message Originator" option is overridden to ensure the secrecy of the
	member list of the DL.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: DR RR
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
