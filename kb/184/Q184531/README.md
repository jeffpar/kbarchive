---
layout: page
title: "Q184531: XADM: Custom Recipient SMTP Address May Not Change Properly"
permalink: /kb/184/Q184531/
---

## Q184531: XADM: Custom Recipient SMTP Address May Not Change Properly

	Article: Q184531
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When changing the global Simple Mail Transfer Protocol (SMTP) site address in
	the Microsoft Exchange Administrator program, the SMTP address of some custom
	recipients may not change to match the new site address.
	
	
	WORKAROUND
	==========
	
	One way to correct this behavior is to change the SMTP site address manually for
	each custom recipient.
	
	Another method is to perform a batch change of all custom recipients with the
	Import and Export utilities of the Microsoft Exchange Administrator program
	using the following steps:
	
	Export the Custom Recipients
	----------------------------
	
	1. From the Tools menu, click Directory Export.
	
	2. Select or create an export file to use.
	
	NOTE: To maintain all possible attributes of the custom recipients, it is
	recommended that you use the Custom.csv file located on the Microsoft Exchange
	Server 4.0 CD in the Support\Samples\Csvs\Custom directory.
	
	1. Select the recipient container to export.
	
	2. Under Export Objects, click only the Custom Recipient option.
	
	3. Click the Include Hidden Objects check box if there are any hidden custom
	  recipients.
	
	4. Click the Export button to complete the export process.
	
	5. Delete the custom recipient objects from the container you exported.
	
	Modify the Export File
	----------------------
	
	1. Open the export file in Microsoft Excel or in a text editor such as Notepad.
	
	2. Remove the E-mail Addresses field (column AK if using Custom.csv).
	
	3. If necessary, add values for the First Name and Last Name fields.
	
	4. Save the file with a different name, such as Custom1.csv. This will preserve
	  the original file in case it is needed again.
	
	Import the New File
	-------------------
	
	1. Prior to importing the new file, change the SMTP site address to the format
	  you wish to use. To do this, select the Site Addressing tab of the Site
	  Addressing object, and edit the existing STMP site address.
	
	2. From the Tools menu, click Directory Import.
	
	3. Select the recipient container and import file to use for the import.
	
	4. Click the Import button to complete the import process.
	
	All of the custom recipients should now have an SMTP address in the correct
	format.
	
	For additional information on using the Import or Export commands, see the
	following Knowledge Base article:
	
	  Q155414 XADM: Bulk Import/Export FAQ
	
	MORE INFORMATION
	================
	
	You may be unable to change the SMTP site address for certain custom recipients
	under the following conditions:
	
	a. The custom recipient was originally created or imported without a first name,
	  last name, or both.
	
	b. The global SMTP Site Address was subsequently changed to the following syntax
	  after the custom recipient was created or imported:
	
	  %s.%g@domain.com
	
	The %s option specifies that the surname (last name) is substituted and the %g
	option specifies that the given name (first name) is substituted. For example, a
	mailbox for Karan Khanna will have the following SMTP e-mail address:
	
	  Khanna.Karan@domain.com
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
