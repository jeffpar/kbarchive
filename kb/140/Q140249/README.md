---
layout: page
title: "Q140249: PC WRmt: Err Msg: Address Is No Longer Valid..."
permalink: /kb/140/Q140249/
---

## Q140249: PC WRmt: Err Msg: Address Is No Longer Valid...

{% raw %}

	Article: Q140249
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If there are more than 474 users on the postoffice, the last 26 users in the
	postoffice address list (POL) will return the following error when you try to
	click Details or send mail to them:
	
	  Address is no longer valid. User or PO no longer exists.
	
	If you select the user from the Global Address List (GAL) or from the Postoffice
	List on Microsoft Mail for Windows, this error does not occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	Remote for Windows. This problem was corrected in version 3.2.4014 of the
	following files: MSRMT.DLL, MSRMTCN.DLL, MSRMTSU.DLL, and MSRMTUI.DLL.
	
	To obtain these updated files, please contact your Microsoft Technical Account
	Manager (TAM) or Product Support Services (PSS).
	
	MORE INFORMATION
	================
	
	The date on the files are 07/06/95.
	
	Once you have gotten the files, copy them to the WINDOWS\MSMAIL\MSRMT
	subdirectory of all of the Windows Remote clients.
	
	Additional query words: 3.20 remote error details
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
