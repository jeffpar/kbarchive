---
layout: page
title: "Q77545: PC Adm: Description of Regular and Interval Times"
permalink: kb/077/Q77545/
---

## Q77545: PC Adm: Description of Regular and Interval Times

	Article: Q77545
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Communicating with external postoffices often means using long distance phone
	services. Microsoft Mail for PC Networks lets you set up a schedule for
	automatic calling to take place. You can specify when your postoffice will call
	the external postoffice and the frequency of the calls.
	
	Choose External-Admin, Setup, and Times. From the Times menu, you have the
	choices of Regular and Intervals.
	
	You must choose either the Intervals option or the Regular option. You cannot use
	both of them.
	
	MORE INFORMATION
	================
	
	Regular
	-------
	
	The Regular option allows you to specify a time span that must elapse before your
	postoffice will make a connection to the external postoffice to send mail.
	
	For example, let's assume that the last connection to the external postoffice was
	at 12:03. It took 20 minutes to send the mail and the regular time interval was
	specified to be 30 minutes. The next connection attempt to the external
	postoffice would be at 12:53 (12:03 + 20 minutes + 30 minutes), providing your
	postoffice had mail to send. If there was no mail to send, there would be no
	connection attempt.
	
	You should choose this option if you anticipate that a large volume of mail will
	be sent to this postoffice throughout the day.
	
	Intervals
	---------
	
	The Intervals command allows you to set specific time intervals during the day
	that mail will be sent to the external postoffice. During the times that you
	specify, the system will check for mail to be sent to the external postoffice.
	
	Intervals should be chosen when you need to call long distance to exchange mail
	with a postoffice on a network in another city. This is because Intervals lets
	you block out calling altogether during certain times of the day such as
	peak-toll charge hours.
	
	Additional query words: 2.10 3.00 adm
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0
	
	=============================================================================
	
