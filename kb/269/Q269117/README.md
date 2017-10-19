---
layout: page
title: "Q269117: PRB:Hourly Type Event Agents Require the Days Property to Be Set"
permalink: /kb/269/Q269117/
---

## Q269117: PRB:Hourly Type Event Agents Require the Days Property to Be Set

	Article: Q269117
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Microsoft Exchange Server Event Service agent is created programmatically and
	scheduled to run hourly, but the agent never runs. Or, the scheduled agent does
	not run until you open and close its Schedule dialog box in Outlook (without
	making any changes).
	
	CAUSE
	=====
	
	By default, when an Event Service agent is programmatically created to run at a
	scheduled time, the Days property of the Schedule object is set to zero, which
	means that the agent is scheduled to run on no days. In this circumstance the
	agent never runs.
	
	When you view the agent schedule in Outlook, and the schedule type is Hourly,
	Outlook automatically sets the Days property to the value that represents every
	day.
	
	RESOLUTION
	==========
	
	When you programmatically create an Event Service agent to run on a schedule as
	Hourly, explicitly set the Days property of the Schedule object.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When you manually create Exchange Server Event Service agent scripts, if the
	agent is set to run on a schedule, a separate Schedule dialog box is displayed
	for setting the days and times when the agent is to run. If the schedule is set
	to Hourly, the check boxes for the days of the week are unavailable. This may be
	misinterpreted as meaning that the Days property is not relevant to an Hourly
	schedule. Actually, the Schedule dialog box presumes that an Hourly type agent
	runs every day.
	
	Event Service agents can be created programmatically by using the Exchange Event
	Service Configuration Library (Esconf.dll). In the object model, the Binding
	object corresponds to an agent. Binding objects have a Schedule object than can
	be set to run the agent at a particular time or periodicity.
	
	When you set the Schedule object programmatically, if the type is set to Hourly,
	the Days property can be set for any day of the week, for some days of the week,
	or all the days of the week.
	
	The Days property is set as an additive value that represents the days of the
	week: Monday = 1, Tuesday = 2, Wednesday = 4, Thursday = 8, Friday = 16,
	Saturday = 32, and Sunday = 64. For example, if the agent is to run on weekdays
	(that is, Monday through Friday), the Days property is set to 31 (1 + 2 + 4 + 8
	+ 16). If an agent is to run only on Mondays, the Days property is set to 1.
	With this scheme, any combination of days can be set. If the Days property is
	not explicitly set, the default value of zero does not correspond to any valid
	days, and the agent does not run under these circumstances.
	
	If the Schedule dialog box is used to verify the schedule, Outlook reviews the
	schedule type and other properties for applicability. If the type is Hourly and
	the Days value is zero, the Days property is overwritten with 31 (meaning that
	the script runs every weekday). This is because without an explicit value, all
	of the weekday check boxes in the Schedule dialog box are selected by default.
	When the Schedule dialog box is closed, the new value is saved and the agent
	runs at the next scheduled time. This overwrite does not occur if the Days
	property is explicitly set to an appropriate value when the agent is created.
	
	The following code sample properly sets the Days property when you create an
	Hourly type agent:
	
	     Set oSchedule = moBinding.Schedule
	     With oSchedule
	        .Interval = 60   'Minutes
	        .Type = 1        'hourly
	        .Days = 127      'every day
	        .StartTime = 0   '12:00:00 am
	        .EndTime = 0.99999 '11:59:59 pm
	     End With
	
	NOTE: This code sample is from the CreateAgent() procedure in the
	Agentmapclass.cls file of the AEditor sample, which is included with the
	Platform Software Development Kit (SDK). The sample can be found in the files
	that are installed by the SDK at PlatformSDK\Samples\DbMsg\Exchange\Aeditor\.
	
	REFERENCES
	==========
	
	For more information, visit the following Microsoft Developer Network (MSDN) Web
	site:
	
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/exchserv/html/samples1_4qyb.asp
	
	For more information, see the Platform SDK.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
