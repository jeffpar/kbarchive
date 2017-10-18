---
layout: page
title: "Q218802: XADM: Can't Enroll Using X.509 V3 Certificates"
permalink: kb/218/Q218802/
---

## Q218802: XADM: Can't Enroll Using X.509 V3 Certificates

	Article: Q218802
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When Key Management (KM) Server administrators choose to issue X.509 v3
	certificates (or issue both v1 and v3), they receive the following error message
	when they click OK on the dialog box that shows the certificate server to use:
	
	  The KMS database had an error - c1031d9f
	
	The following event is logged in the event viewer application log:
	
	  Event ID: 5017
	  Source: MSExchangeKMS
	  Type: Error
	  Category: none
	  Description: KMS Admin <domain>\<account> failed to set the
	  CertServer configuration.
	
	CAUSE
	=====
	
	The organization name contains a special character such as a comma (,),
	underscore (_), and so on.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Setup Program
	
	+---------------------------+
	| File name   | Version     | 
	+---------------------------+
	| Srvrmax.exe | 5.5.1960.10 | 
	+---------------------------+
	| Srvrmin.exe | 5.5.1960.10 | 
	+---------------------------+
	
	
	
	After you obtain the fix, follow these steps to apply it:
	
	1. Create a new folder on your hard disk, and then copy the contents of the
	  Server\Setup\I386 folder from the Exchange Server 5.5 CD-ROM to this new
	  folder.
	
	2. Rename the Setup.exe file in the folder on the hard disk to Setup.old, and
	  then rename the Srvrmax.exe or Srvrmin.exe file to Setup.exe. Note that the
	  Srvrmax.exe file should be used for the Enterprise edition of Exchange Server
	  5.5 and the Srvrmin.exe file should be used for the Standard edition of
	  Exchange Server 5.5.
	
	3. Run Setup.exe from the folder on the hard disk.
	
	4. When the installation process is finished, apply the latest service pack for
	  Exchange Server 5.5, even if it was already applied previously. For
	  additional information about how to obtain the latest service pack for
	  Exchange Server 5.5, click the article number below to view the article in
	  the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	WORKAROUND
	==========
	
	WARNING: If you are using X.509 V1 certificates, the steps listed below remove
	the key history for all users. If you have users who will still be using
	X.509.V1, do not run the steps below and please call Microsoft Product Support
	Services (PSS) and reference this article.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. From a command prompt, run net stop certsvc to stop the Certificate Authority
	  Service.
	
	2. Open the registry and change the value for the following key from "," to
	  "!":
	
	  HKEY_LOCAL_MACHINE\CurrentControlSet\Services\CertSrc\Configuration\<Certificate
	  Name>\Subject Name Separator
	
	  NOTE: The value should be punctuation characters only such as the comma (,),
	  period (.), semicolon (;), or exclamation mark (!). The default is a comma
	  (,). It also needs to be a punctuation mark that is not present in the
	  organization name.
	
	3. From a command prompt, run net stop msexchangekms to stop the KMS service.
	
	4. Make a backup of the Kmsdata folder.
	
	5. Delete all the files in the Kmsdata folder.
	
	6. From a command prompt, change directory to point to the C:\Exchsrvr\Bin
	  folder, and run the following command:
	
	  "kmserver -I <password> -X "c=us, o=\" <OrgName>\",
	  ou=<SiteName>, cn=certificate authority"" (without the quotation marks)
	
	  where <password> is your KMS password, <OrgName> is your
	  organization name, and <SiteName> is your site name.
	
	7. Restart the services. You should now be able to use X.509 V3 certificates.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
