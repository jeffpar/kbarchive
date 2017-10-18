---
layout: page
title: "Q182083: XFOR: Attachment Extensions Handled Differently in Exchange 5.5"
permalink: kb/182/Q182083/
---

## Q182083: XFOR: Attachment Extensions Handled Differently in Exchange 5.5

	Article: Q182083
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	With Exchange 5.0 and 4.0, the attachment file names received and sent through
	the Internet Mail Service (Internet Mail Connector in 4.0) may be altered. For
	more information regarding this behavior, consult the following Microsoft
	Knowledge Base article:
	
	  Q147299 XFOR: Attachment Names Changed in Messages To & From Internet
	
	With Exchange 5.5, the attachment file names received and sent through the
	Internet Mail Service are preserved.
	
	MORE INFORMATION
	================
	
	This change was made in an effort to better preserve message fidelity (the
	ability to reconstitute a message exactly as it was received for later
	resubmission), and due to customer demand.
	
	The Exchange Server versions 4.0 and 5.0 behavior can be restored by implementing
	a registry value change as documented below.
	
	Exchange 5.5 offers a mechanism for restoring the Exchange Server 4.0 and 5.0
	behavior with respect to file name extensions. It is recommended that customers
	not enable this feature, because it has the effect of preventing some document
	handlers from working properly. It is also possible that this mechanism will be
	unavailable in future versions of Exchange.
	
	Consider, for example, the vCard Internet standard. The vCard standard calls for
	a <FILE>.VCF file to be sent as a text/plain attachment. In Exchange 4.0
	and 5.0, the attachment is renamed to <FILE>.TXT, and a user
	double-clicking on the attachment invokes the document handler for .txt files,
	instead of the vCard document handler associated with .vcf files.
	
	If you still want to enable this mechanism, here are the instructions for adding
	the required registry value:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS
	  \ParametersSystem\InternetContent
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	     Value Name: RemapExtension
	     Data Type:  REG_DWORD
	     Value:      1
	
	4. Exit the Registry Editor and restart the information store service for the
	  change to take effect.
	
	Setting the RemapExtension to 1 causes the information store to restore the
	Exchange 4.0/5.0 behavior as described in Q147299. To restore Exchange 5.5
	behavior, either delete the registry value or set it to a value of 0 and restart
	the information store.
	
	Additional query words: Missing Wrong Changed Altered Filename Behavior extension
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
