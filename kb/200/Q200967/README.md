---
layout: page
title: "Q200967: SMS: How to T-shoot Advertisements That Are Not Seen by Clients"
permalink: /kb/200/Q200967/
---

## Q200967: SMS: How to T-shoot Advertisements That Are Not Seen by Clients

{% raw %}

	Article: Q200967
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbSoftwareDist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If an advertisement does not appear on the client or if the advertisement does
	not run properly, first review the following Troubleshooting Software
	Distribution steps, as outlined in the Systems Management Server 2.0
	Administrators Guide:
	
	- Use the SMS Status System to verify that the package has successfully made it
	  to at least one distribution point.
	
	- Use the Advertisement Status Summarizer to see which clients have received
	  and/or rejected the advertisement.
	
	- Verify that the client has refreshed its list of advertised programs.
	
	- Make sure that the client component is installed.
	
	- Check the time settings.
	
	- Verify the program properties.
	
	For further troubleshooting at the client, see the MORE INFORMATION section of
	this article.
	
	MORE INFORMATION
	================
	
	At the client, the Offer Data Provider (ODP) checks for the existence of
	advertisements that are valid for the system, the logged on user, or the logged
	on user's group memberships. On Microsoft Windows NT clients, there are two
	executable files: Odpsys32.exe checks for advertisements for the system, and
	Odpusr32.exe checks for advertisements for the user or user group memberships.
	On Microsoft Windows 95 or Windows 98 clients, the Odpwin9x.exe file performs
	all the ODP checks. The logs for ODP are located in the \%Winroot%\MS\SMS\Logs\
	directory. The following table provides more information about these logs:
	
	+-----------------------------------------------------------------+
	| Thread                  | WinNT client logs | Win9x client logs | 
	+-----------------------------------------------------------------+
	| Windows system ODP      | Odpsys32.log      | Odpsys32.log      | 
	+-----------------------------------------------------------------+
	| Windows user ODP        | Odpusr32.log      | Odpusr9x.log      | 
	+-----------------------------------------------------------------+
	| Windows user group ODP  | Odpwnt32.log      | Odpwnt9x.log      | 
	+-----------------------------------------------------------------+
	| Advertised Programs Mgr | Smsapm32.log      | Smsapm32.log      | 
	+-----------------------------------------------------------------+
	
	The ODP find the appropriate *.INS files listed in the <sitecode>Systm.lkp,
	<sitecode>User.lkp, <sitecode>Usrgp.lkp files, which are located in
	the \\ <CLIENT_ACCESS_POINT_SERVER> \ CAP_<sitecode> \ Offerinf.box\
	directory. The ODP then loads the advertisements from the *.ofr file(s) that are
	listed in the *.ins file, and sends them to the Advertised Programs Manager.
	
	Verify that the ODP component is active and is able to connect to the client
	access point (CAP) to read and load the offer listed in the .ins file. Check the
	associated ODP Log based on whether it is an advertisement for a user, system,
	or user group. Client logs are enabled by default.
	
	Verify that the Advertised Programs Manager is able to connect to the specified
	distribution point to read the package files and initiate program execution at
	the client.
	
	If the Program Execution Manager starts running the program based on the
	information provided by Advertised Programs Manager and the program fails, the
	offer may still show as available because the process was not completed. Verify
	that the package has been set up correctly and that you can run the program at
	the client manually, without using Systems Management Server to distribute it to
	the client.
	
	Additional query words: prodsms swdist32 win95 win98
	
	======================================================================
	Keywords          : kbsms200 kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
