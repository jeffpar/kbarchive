---
layout: page
title: "Q260350: INFO: What Does &quot;Wait 0 0&quot; Mean in the Routing Process?"
permalink: kb/260/Q260350/
---

## Q260350: INFO: What Does &quot;Wait 0 0&quot; Mean in the Routing Process?

	Article: Q260350
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): kbExchange kbExchange550 kbMsg kbGrpDSMsg kbDSupport
	Last Modified: 06-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange Server routing objects have six intrinsic actions:
	
	- AndSplit
	- Goto
	- New
	- OrSplit
	- Wait
	- Terminate
	
	A Microsoft Developer Network (MSDN) document describes the Wait action as
	follows:
	
	  
	
	  Action     Parameter        Description
	  Wait       Time as Long     Wait the specified number of minutes; then 
	                           execute the next row.
	
	Some of the examples include the following parameter:
	
	  Wait 0   0
	
	What does this example mean? Does it mean that the routing process does not wait
	and immediately executes the next row of the routing map?
	
	MORE INFORMATION
	================
	
	The MSDN document does not clearly state what Wait action really does. The
	parameter
	
	  Wait 0   0
	
	means that the routing process waits for a certain time based on the existing
	"waiting time." The waiting time depends on the following items:
	
	- The amount of time that was previously used for Wait action.
	
	- The time interval that is specified in the Time Scheduled Event.
	
	For example, if you set the time interval for 15 minutes from the Scheduled
	Event, and you have the following routing map:
	
	  ......
	  1010   Wait          0     10080   
	  1012   Goto          0     1020
	  1014   Wait          0     0 
	  2000   DoSomething   2            
	  ......
	
	the second Wait action uses the existing time (15 minutes that is set from the
	Scheduled Event) and the 10,080 minutes that is used by the first Wait action.
	As the result, DoSomething action in the above map is not executed until either
	the timeout expires (10,080 minutes) or it receives the "Approved/Rejected"
	message.
	
	Additional query words: Event Scripting Agent Routing Objects
	
	======================================================================
	Keywords          : kbExchange kbExchange550 kbMsg kbGrpDSMsg kbDSupport 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
