---
layout: page
title: "Q268791: SMS: How Status MIF Produced by ISMIF32.exe Is Processed in SMS"
permalink: kb/268/Q268791/
---

## Q268791: SMS: How Status MIF Produced by ISMIF32.exe Is Processed in SMS

	Article: Q268791
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbConfig kbsms200 kbAdvertisement kbPackage kbReport kbsmsUtil kbStatSum
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you perform a software distribution, you may want to define a custom status
	Management Information Format (MIF) file to be returned after the advertisement
	has run. This can be accomplished by using the Ismif32.exe file from the
	Microsoft BackOffice Resource Kit version 1.0.
	
	The status MIF file is collected by the client agent, Smsapm32, and reported to
	the database if the following criteria are correct:
	
	a. The time and date recorded on the status MIF file are between the time and
	  date that Smsapm32 starts and ends the advertisement.
	
	b. The information on the Reporting tab in Package Properties in the SMS
	  administrator's console matches the status MIF file.
	
	MORE INFORMATION
	================
	
	The Ismif32.exe file has the following command-line switches:
	
	  -f = MIF file name (no drive letter or extension, test)
	  -p = Product name
	  -c = The manufacturer or publisher of your package
	  -v = The version of your status MIF
	  -d = The description of your status message
	  -s = 0 or 1 with 0 (zero) being failed and 1 being success
	  -q = Quiet mode, no output is displayed on the screen
	
	The following information is a map of the command parameters and the fields that
	they map to, as they are listed in the Reporting tab:
	
	  MIF file name = Value entered for -f
	  Name = Value entered for -p
	  Version = Value entered for -v
	  Publisher = Value entered for -c
	
	The following is an example of an Ismif32 command line (and its corresponding log
	entries) that creates a status MIF file:
	
	  ISMIF32 -f test -p "SMS" -c "Microsoft" -v "2.0 SP2" -d "This test was a success" -s 1
	
	  Sched data : MIF file spec "C:\Temp\Test.mif"~ $$
	  Sched data : MIF file spec "C:\Winnt\Test.mif"~ $$
	  Sched data : Checking MIF file "C:\Winnt\Test.mif"~ $$
	  Sched data : MIF file manufacturer "Microsoft"~ $$
	  Sched data : MIF file product "SMS"~ $$
	  Sched data : MIF file version "2.0 SP2"~ $$
	  Sched data : MIF file locale ""~ $$
	  Sched data : MIF file status "Success"~ $$
	  Sched data : MIF file description "This test was a success"~ $$
	  Sched data : Found MIF file match: "C:\Winnt\Test.mif"~ $$
	
	NOTE: If the last line is not present, the status MIF file was not written to the
	database. Smsapm32 looks for the MIF file in both the Temp and Windows NT
	directories.
	
	After the MIF file is written to the database, you are able to use advertisement
	status messages to see it. To do this, right-click the advertisement status
	message and click "Show All Messages". Locate the message ID 10007. This is your
	custom status MIF message.
	
	REFERENCES
	==========
	
	The Ismif32.exe file is also discussed in the <Systems Management Resource
	Guide, Supplement>, Chapter Four.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q186415 SMS: Status MIF Creator, Ismif32.exe Is Available
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbsms200 kbAdvertisement kbPackage kbReport kbsmsUtil kbStatSum 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
