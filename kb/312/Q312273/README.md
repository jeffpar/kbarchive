---
layout: page
title: "Q312273: XADM: Duplicate Attachments When You Update a Meeting Request"
permalink: /kb/312/Q312273/
---

## Q312273: XADM: Duplicate Attachments When You Update a Meeting Request

	Article: Q312273
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 29-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the following scenario, duplicate attachments are created when users are
	using Microsoft Outlook:
	
	1. User A sends a recurring meeting request to User B with attachment 1.
	
	2. User B accepts this meeting.
	
	3. User A edits an occurrence of the meeting and replaces attachment 1 with
	  attachment 2.
	
	4. User A sends an updated meeting request to User B. .
	
	5. Collaboration Data Objects (CDO) code is run against User B's Inbox. CDO gets
	  the meeting request and calls the GetAssociatedAppointment() function, and
	  then calls the Update function on the appointment.
	
	6. User B opens his Outlook calendar. All occurrences of the appointment have
	  both attachments.
	
	If you replace step 5 with the following action
	
	  User B opens his Outlook Inbox and accepts the updated meeting request
	
	the one edited occurrence of the meeting has attachment 2 only and the other
	occurrences have attachment 1 only. CDO should work the same way.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem immediately, download the fix as instructed below or
	contact Microsoft Product Support Services to obtain the fix. For a complete
	list of Microsoft Product Support Services phone numbers and information on
	support costs, please go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  English: DownloadDownload the Q312273 package now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=38967)
	
	  French: DownloadDownload the Q312273 package now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=38968)
	
	  German: DownloadDownload the Q312273 package now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=38969)
	
	  Japanese: DownloadDownload the Q312273 package now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=38966)
	
	Release Date: May 16, 2002
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version      Size     File name     
	  ---------------------------------------------------
	  06-Dec-2001  12:13  5.5.2655.79  801,040  Cdo.dll
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Exchange
	Server 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
