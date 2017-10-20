---
layout: page
title: "Q263023: SMS: Information on Scaling Software Metering"
permalink: /kb/263/Q263023/
---

## Q263023: SMS: Information on Scaling Software Metering

{% raw %}

	Article: Q263023
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The purpose of this article is to provide information on scaling software
	metering for medium to larger sized Systems Management Server (SMS) 2.0 sites.
	
	MORE INFORMATION
	================
	
	Determining Site Requirements in Online Mode
	--------------------------------------------
	
	Testing shows that the response time for the software-metering service that
	interacts with the clients, SMS_License_Server or Remodbc.exe, is not dependant
	on how many clients are connected to the server but how many requests it
	receives at one time. We also know that Remodbc does not respond any faster when
	running on faster machines and/or machines with multiple processors. Testing has
	shown that a software-metering server can handle around five requests per second
	or 18,000 per hour. Depending on the software usage on your clients, more
	software-metering servers may need to be added to handle the load efficiently.
	Note that after more than one software-metering server is added to the site,
	licenses have to be balanced between each software-metering server, adding some
	complications to the metering process.
	
	Determining Site Requirements in Offline Mode
	---------------------------------------------
	
	In offline mode the best way to tell if your metering servers are overloaded is
	to monitor for a backlog of log files in the Server\Licmtr\Inboxes\Offline
	directory. These log files are usage data that is uploaded periodically to the
	software-metering server to be loaded in the Data Cache and eventually moved up
	to the software-metering SQL database via data collation. Depending on the
	software usage on your clients, more software-metering servers may need to be
	added to handle the load efficiently.
	
	Assessing Site Hardware Requirements in Online Mode
	---------------------------------------------------
	
	Based on the information above it is recommended to begin testing software
	metering in the lab and then in a small production scenario with real
	application usage data. Start with around 200 clients per software-metering
	server and increase the ratio, if possible, by doing the steps recommended in
	the increasing ratios section below. In addition, a software-metering server
	does not need to be a very fast machine, using the recommended requirements in
	the SMS Administrators guide should be sufficient for most environments.
	
	Assessing Site Hardware Requirements in Offline Mode
	----------------------------------------------------
	
	Based on the information above it is recommended to begin testing software
	metering in the lab and then in a small production scenario with real
	application usage data. Start with around 350 clients per software-metering
	server and increase the ratio, if possible, by doing the steps recommended in
	the increasing ratios section below. Because offline metering servers constantly
	load data into a database, it is a good idea to have faster processors and disk
	arrays than you would on an online metering server.
	
	How to Increase Client to Software-Metering Server Ratios in Offline and Online Mode
	------------------------------------------------------------------------------------
	
	Maintaining an up-to-date excluded programs list is the best way to increase
	client to software-metering server ratios. The excluded programs list is
	downloaded automatically by the clients from the SMS_License_Server (Remodbc)
	service every time the client boots up and every 4 hours by default. This
	creates unnecessary network and software-metering server utilization, especially
	when dealing with a well maintained (large) excluded programs list. For this
	reason it is recommended to raise the client configuration polling interval
	(located under the software-metering client agent) to a higher value.
	
	Maintaining an up-to-date excluded programs list is a lengthy task. To expedite
	the process of manually creating an excluded programs list one can write a SQL
	query that moves all programs from the Nonlic (unlicensed software) table in the
	software-metering database to the ignore table (excluded programs list) unless
	it exists in the product table (all licensed programs). This query should be run
	periodically to catch any new unlicensed software that is being run in your
	environment.
	
	
	After using a query that moves the unlicensed data to the excluded programs list,
	any products that need to be managed should be individually removed from the
	excluded programs list. This can be accomplished from the software-metering
	tool, by right-clicking on a product in the excluded list, and selecting
	"remove." The removed product starts reporting software usage as the change is
	passed down to the clients during the update interval.
	
	Remodbc performs maintenance on the Data Cache every week by default. Usually
	some of the Data Cache tables are open during this maintenance so it isn't done,
	especially on commonly used tables like Nonlic.dbf, where it really needs to be
	done. One should do the following to make sure this maintenance occurs:
	
	- Stop the License_metering and Licsvr_service thread on the site server using
	  SMS Service Manager.
	
	- Stop the SMS_LICENSE_SERVER (Remodbc) service on each software-metering
	  server
	
	- Run Vfp_pack.exe on each software-metering server
	
	- Restart all the services/threads
	
	To increase the frequency of the table maintenance you can do the following:
	
	1. Edit RemOdbc.ini on the site server and in the software-metering folder
	  (swmtr) on all software-metering servers using any text editor.
	
	2. Insert the following key in the [DS] section where seconds represents how
	  often, in seconds, you want maintenance performed on the software-metering
	  tables:
	
	  PackInterval=seconds
	
	Simulating Software Metering Activity in the Test Lab
	-----------------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	This registry entry can be used to load multiple client agents on a machine,
	therefore when one application is opened and five instances of
	Licclint.exe/Liccli95.exe are running then five requests to use that application
	hit the software-metering server at the same time:
	
	  REGEDIT4
	
	  [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Client\Client Components\LICENSE
	  METERING]
	  "multiclient"="yes"
	
	How Network Issues Impact Software-Metering Server's Performance
	----------------------------------------------------------------
	
	Having a software-metering server on a healthy network, and a server that is not
	being heavily utilized over the network, definitely helps the performance of a
	Software-Metering Server.
	
	On child sites, enable data summarization for every 24 hours. This allows the
	data to be summarized before it is sent up to the Primary Site. The trade-off is
	that you lose a measure of workstation detail. Determine the need for
	workstation detail versus the network savings of summarized data.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
