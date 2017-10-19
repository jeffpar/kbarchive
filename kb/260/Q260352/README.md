---
layout: page
title: "Q260352: PRB: Delay in Receiving Final Report Using Routing Wizard"
permalink: /kb/260/Q260352/
---

## Q260352: PRB: Delay in Receiving Final Report Using Routing Wizard

	Article: Q260352
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbMsg kbGrpDSMsg kbDSupport
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Routing Wizard for parallel routing, you may not receive the
	final report for several days, even though the posted message is approved or
	rejected immediately by all the recipients.
	
	CAUSE
	=====
	
	The Routing Wizard uses the following map for the routing process:
	
	  ......
	
	  1010   Wait              0     10080
	  1012   Goto              0     1020
	  1014   Wait              0     0 
	  1020   ORSplit           0     IsTimeout            
	  ......
	
	  5000   ORSplit           0     IsApprovedTable
	  ......
	
	  10000  FinalizeReport    2     False                False
	  ......
	
	  20000  FinalizeReport    2     True                 False
	  ......
	
	  20020  Terminate         0     0
	  20030  Goto              0     20020
	  30000  Terminate         0     1
	  ......
	
	You can only reach the ORSplit action at 5000 and create the final report when
	the IsTimeout action returns True. However, the following action indicates that
	the routing process will use the waiting time that was used by the previous Wait
	action, which is 10080 minutes (7 days):
	
	  Wait    0      0   
	
	RESOLUTION
	==========
	
	Routing Wizard is a sample tool that is used to illustrate some of the
	capabilities of the Exchange Server Routing objects. You can and should use the
	ideas that are provided by the Routing Wizard to write your own tools. If you
	want your tools to behave differently, you can modify the script source code or
	change the routing map.
	
	To speed up the routing process, modify the routing map as follows:
	
	- Reduce 10080 (7 days) to a smaller number, such as 1440 (1 day).
	
	To do this, replace the following code
	
	  1010   Wait    0     10080
	
	with:
	
	  1010   Wait    0     1440
	
	- Specify the wait time instead of using the existing waiting time.
	
	To do this, replace the following code
	
	  1014   Wait    0      0   
	
	with:
	
	  1014   Wait    0      60    'one hour
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange Server 5.5 Service Pack 1 provides the Routing Wizard routing
	tool. The Routing Wizard sample application illustrates the type of routing
	tools that can be built easily with Microsoft Exchange Routing. With the Routing
	Wizard, you can define and install simple sequential or parallel routing and
	approval logic into Exchange Server folders.
	
	REFERENCES
	==========
	
	For more information on how to use the Routing Wizard, see the Microsoft
	Developer Network (MSDN).
	
	Additional query words: Event Scripting Agent, Routing Wizard
	
	======================================================================
	Keywords          : kbMsg kbGrpDSMsg kbDSupport 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbprb
	
	=============================================================================
	
