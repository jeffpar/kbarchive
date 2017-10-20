---
layout: page
title: "Q257271: SMS: Client Does Not Run Advertisement of Same Package/Program"
permalink: /kb/257/Q257271/
---

## Q257271: SMS: Client Does Not Run Advertisement of Same Package/Program

{% raw %}

	Article: Q257271
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbenv kbClient kbsms200 kbAdvertisement kbPackage kbSoftwareDist
	Last Modified: 14-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under most circumstances, a Systems Management Server (SMS) 2.0 client does not
	re-run an advertisement for a package and program that was previously attempted.
	This article describes how to force clients to run an advertisement, even if the
	client has previously run the same package and program.
	
	MORE INFORMATION
	================
	
	By default, SMS 2.0 clients do not re-run advertised programs unless the
	advertisement is on a recurring schedule. Because it is possible for clients to
	receive multiple advertisements or assignments for the same package/program, it
	is not recommended that the client install the same package/program more than
	once. For this reason, SMS uses the package/program combination to determine
	whether or not a package has been previously run.
	
	However, there may be situations when you need to have certain clients re-run a
	previously advertised program (for example, if you advertise a program to 20
	clients and only 10 clients run it successfully). In this example, if you want
	to force all 20 clients to run the advertisement again, add a second time-based
	assignment to the existing advertisement. Do not delete the first assignment;
	the second assignment causes the advertisement to be treated by clients as a
	recurring assignment.
	
	NOTE: Event-based assignments do not support rescheduling. Recurring assignments
	are always run on their schedule regardless of any previously run status. This
	forces all 20 clients to re-run the advertisement on the second schedule. Any
	clients added to this collection should only run the second assignment (not
	both), unless both assignment times to that client are scheduled in the future.
	Recurring assignments are run by clients when they are received, so the client
	only runs the last scheduled assignment and does not run the advertisement again
	unless it is scheduled again.
	
	If you want to use only the 10 clients that did not successfully run the
	advertisement the first time, create an additional assigned advertisement that
	targets the same collection. This creates two assignments from two separate
	advertisements. In this situation, clients run the second assignment if the
	previous assignment was unsuccessful and the second advertisement's schedule
	occurs after the previously unsuccessful attempt.
	
	Another alternative is to create either a new package\program or a new program
	for the existing package, and advertise it to the client. Even if the client has
	successfully installed the same software previously, it runs because the package
	and/or program ID is now different.
	
	REFERENCES
	==========
	
	For more information, refer to the Systems Management Server 2.0 Administrators
	Guide and the Microsoft BackOffice 4.5 Resource Kit.
	
	Additional query words: prodsms fail fails failed
	
	======================================================================
	Keywords          : kbenv kbClient kbsms200 kbAdvertisement kbPackage kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
