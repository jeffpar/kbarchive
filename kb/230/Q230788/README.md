---
layout: page
title: "Q230788: XADM: Using DSEXPORT to Obtain MTA Configuration Information"
permalink: /kb/230/Q230788/
---

## Q230788: XADM: Using DSEXPORT to Obtain MTA Configuration Information

{% raw %}

	Article: Q230788
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbtool exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to export the directory attributes for the Microsoft
	Exchange Server Message Transfer Agent (MTA) object. Some of the attributes
	forming the MTA object are:
	
	- MTA-Local-Desig = Local MTA name: <Servername>
	- MTA-Local-Cred = Local MTA password: <None>
	- Deliv-Cont-Length = Message size, maximum KB:
	- Expand-DLs-Locally = Expand remote distribution lists locally
	- Deliv-Ext-Cont-Types = Convert incoming messages to Exchange Server contents
	
	The Microsoft Exchange Administrator program does not export MTA configuration
	data. In some cases, it may be useful to export the directory attributes
	associated with MTAs to verify that attributes are consistent across multiple
	servers in a site and multiple site organizations, for example, verifying that
	message size limits are set to the same values.
	
	MORE INFORMATION
	================
	
	The Dsexport.exe utility, which is available in the Microsoft Platform Software
	Development Kit (SDK), can be used to export directory information about the
	Exchange Server MTA. Dsexport.exe is located in the
	Samples\Dbmsg\Exchange\Dsexport directory.
	
	Dsexport.exe has some command-line arguments that are not recognized by the
	Microsoft Exchange Administrator Import\Export processor. These arguments make
	this tool particularly useful for dumping objects other than Mailbox or
	Recipient container objects.
	
	For more information about Dsexport.exe, consult the Microsoft Platform SDK
	documentation.
	
	Using Dsexport.exe
	------------------
	
	Dsexport.exe outputs information into a text file as comma separated values
	(CSV). If the target file exists prior to running Dsexport.exe, and this target
	CSV file lists the name of each of the object attributes you want separated by
	commas, the file is used as a template header file when Dsexport.exe is
	executed. This provides the ability to control which object attributes are
	dumped.
	
	1. Copy Dsexport.exe to the Exchsrvr\Bin directory.
	
	2. In the Exchsrvr\Bin directory, create a text file called Mta_attributes.csv
	  with only the following single line of text in it:
	
	  Obj-Class,MTA-Local-Desig,MTA-Local-Cred,Deliv-Cont-Length,Expand-DLs-Locally,Deliv-Ext-Cont-Types
	
	  You can add any other attribute you require to the above header line. To
	  determine the syntax for other attributes, run the Exchange Administrator
	  program in raw mode.
	
	  WARNING: If you use the raw mode of the Exchange Server Administrator program
	  (admin /r) incorrectly, serious problems may occur that may require you to
	  reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	  Microsoft cannot guarantee that problems that result from using raw mode
	  incorrectly can be solved. Use raw mode at your own risk.
	
	  Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	3. Execute the following command-line (all on one line) from the Exchsrvr\Bin
	  directory:
	
	  dsexport /no_ui /file=MTA_ATTRIBUTES.CSV /dsa=%1
	  /basepoint=/o=%2/ou=%3/cn=Configuration/cn=Servers/cn=%1 /CLASSES=MTA
	
	  where:
	
	  %1 = <local_exchange_servername> (Case sensitive)
	  %2 = <organization_name> (Case sensitive)
	  %3 = <site_name> (Case sensitive)
	
	  This will result in an Mta_attributes.csv file that includes the attributes
	  specified in the CSV file. The /no_ui parameter is included in the January
	  1999 and later versions of the Platform SDK.
	
	Additional query words: print configuration export
	
	======================================================================
	Keywords          : kbtool exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
