---
layout: page
title: "Q178402: XCLN: Determining Whether Outlook 8.03 is Exportable or NA Only"
permalink: /kb/178/Q178402/
---

## Q178402: XCLN: Determining Whether Outlook 8.03 is Exportable or NA Only

{% raw %}

	Article: Q178402
	Product(s): Microsoft Exchange
	Version(s): 5.5,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, version 8.03 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Quickly determining whether an installed version of Outlook 8.03 is the North
	American 64-bit security encryption version or the exportable version may be of
	importance to many customers. From an appearance and client functionality
	standpoint, there is no visible difference.
	
	MORE INFORMATION
	================
	
	Because of U.S. export laws, 64-bit versions of the advanced security file
	(Etexch32.dll) are only available for North American English (Eng.na) and French
	(Frn.na). These languages are supported for use only in the United States and
	Canada.
	
	To determine which type of encryption your advanced security file (Etexch32.dll)
	currently supports, in the Microsoft Exchange Client or Microsoft Outlook
	Client, on the Tools menu, click Options, and then click Security. This dialog
	box provides information that indicates whether the client is using the
	International (exportable version) or the North American-only version of
	encryption.
	
	Additionally, the version can be determined without opening the client in the
	Windows 95 or Windows NT Explorer. Select the Etexch32.dll file. Right- click on
	the file and choose Properties and select the Version tab. Information in this
	property page lists the description of the file as Export version, or US/Canada
	Only, Not for Export. The latter of these two will contain the 64-bit security
	encryption.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook803
	Version           : :5.5,8.03
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
