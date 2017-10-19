---
layout: page
title: "Q81342: Mac Fax: Creating Fax Gateway Account Cover Pages"
permalink: /kb/081/Q81342/
---

## Q81342: Mac Fax: Creating Fax Gateway Account Cover Pages

	Article: Q81342
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.x,3.0a,3.0b,3.1,3.1a,3.1c,3.1d
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.x, 3.0a, 3.0b, 3.1, 3.1a, 3.1c, 3.1d 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can configure the Microsoft Mail for AppleTalk Networks Gateway to Fax to
	send a cover page with each fax transmission. You need to first create a cover
	page using any non-PostScript application that has printing capabilities.
	
	1. Leave the top 2 to 3 inches of the document blank because transmission
	  information is placed at the top of the page when a cover page is used.
	
	2. In the Chooser, select MailSender.
	
	3. Print the document. When the MailSender print dialog opens, click the Save
	  File radio button.
	
	4. When the "Save Image File As" dialog appears, click the Formats button and
	  select "FAXGATE Cover Page" from the list of formats. Save the file and copy
	  it to the master fax gateway server's hard disk where it will be safe from
	  accidental deletion.
	
	5. At the Macintosh serving as the master fax gateway server, sign into Mail as
	  the Network Manager.
	
	6. Choose Gateway Accounts from the Mail menu and click the Modify radio button.
	
	7. Select a gateway account.
	
	8. Click the Cover Page button and select any cover page file that you have
	  previously created. Each gateway account can have a unique cover page
	  assigned to it. Repeat Steps 7 and 8 to set the cover page for other gateway
	  accounts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Mail for AppleTalk Networks
	Gateway to Fax. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The cover page is rasterized at 200x200 dpi on the Macintosh on which it is
	printed with MailSender. To achieve the best looking results, use TrueType or
	ATM font scaling programs to create the cover page.
	
	Because the cover page is rasterized at 200x200 dpi, a cover page will not be
	sent when the Fastest resolution option is selected, which is 200x100 dpi. No
	warning is given when the account is configured this way.
	
	Additional query words: kbbug2.00 kbbug2.00a kbbug2.00b kbbug3.00 kbbug3.00a kbbug3.00b 2.00 2.00a 2.00b 3.00 3.00a 3.00b 3.10 3.10a 3.10c 3.10d coverpage
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300a kbMailATN300b kbMailATN310 kbMailATN310a kbMailATN310c kbMailATN310d kbMailATN2xSearch
	Version           : WINDOWS:2.x,3.0a,3.0b,3.1,3.1a,3.1c,3.1d
	
	=============================================================================
	
