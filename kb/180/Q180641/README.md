---
layout: page
title: "Q180641: XCON: cc:Mail Connector NDRs Messages with Unknown Date Format"
permalink: /kb/180/Q180641/
---

## Q180641: XCON: cc:Mail Connector NDRs Messages with Unknown Date Format

	Article: Q180641
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you use Import.exe 5.15, all messages you send to cc:Mail post offices
	generate the following non-delivery report (NDR):
	
	  Your message was not delivered to all recipients
	  The cause of the failure(s) is listed below
	       ***  Unknown Date Format  ***
	
	You may also see the following event in the Microsoft Exchange Server computer's
	Windows NT Event Viewer Application log:
	
	     Event ID: 63
	
	  Lotus cc:Mail IMPORT from file *.ccm returned result code 5.
	  Undeliverable message or updates.
	
	CAUSE
	=====
	
	The Microsoft Exchange Connector for Lotus cc:Mail creates *.ccm files for
	Import.exe to send to the cc:Mail post office. Import.exe 5.15 picks its date
	format from the locale set in Windows NT. If there is a mismatch between the
	date in the *.ccm file and the date format used by Import.exe, the above error
	message will be generated.
	
	When the Microsoft Exchange Connector for Lotus cc:Mail detects the Unknown Date
	Format non-delivery report, it makes one attempt to correct this by forcing the
	*.ccm file into US date format. If the Windows NT locale is using a US date
	format, then the problem will be resolved and subsequent messages should not
	fail. However, if the Windows NT locale is using a non- US date format, then
	forcing the *.ccm files into US date format will not resolve the problem, and
	all messages will continue to fail.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Import.exe is provided by Lotus Inc., a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	MORE INFORMATION
	================
	
	This problem only applies when you are using version 5.12-5.15 of Import.exe. It
	does not apply to Import.exe version 6, because the cc:Mail connector uses a
	different method to set the date format.
	
	The Microsoft Exchange Connector for Lotus cc:Mail initially generates the *.ccm
	files for Import.exe with the date format defined by the Post Office Language on
	the Post Office page of the Connector for cc:Mail. Import.exe uses the date
	format defined by the Windows NT locale. If the *.ccm file date format does not
	match the Import.exe format, an Unknown Date Format NDR is generated.
	
	The Microsoft Exchange Connector for Lotus cc:Mail attempts to resolve this by
	setting the Locale Date Format registry parameter to 1 (Force US *.ccm date
	format):
	
	  HKEY_LOCAL_MACHINE
	     System
	        CurrentControlSet
	           Services
	              MSExchangeCCMC
	                 Parameters
	
	After Locale Date Format is non zero, it will never be changed again. Setting
	Locale Date Format to 1 overrides the date format defined by the Post Office
	Language on the Post Office page and forces it to be US date format.
	
	This will resolve the problem if Import.exe is using US date format. However, if
	Import.exe is using a non US date format, there will still be a mismatch and
	messages will not be delivered. This can occur if the Windows NT locale is a non
	US date format.
	
	RESOLUTION
	==========
	
	To resolve this problem, apply the hotfix described above. This allows two
	additional settings for Locale Date Format:
	
	Locale Date Format 2 --> Force European *.ccm date format (dd/mm/yy)
	Locale Date Format 3 --> Force Japanese *.ccm date format (yy/mm/dd)
	
	By manually editing the Locale Date Format, you can force the *.ccm file date
	format to match the Windows NT date format. As above, after the service detects
	that the Locale Date Format is non zero, it will never be changed again.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe as appropriate for your
	  version of Windows NT).
	
	2. Modify the setting of the registry value:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeCCMC
	     \Parameters\Locale Date Format
	
	  to match the date format of Windows NT.
	
	  NOTE: The above registry value is one path; it has been wrapped for
	  readability.
	
	Additional query words: ccmc ndr localedateformat
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
