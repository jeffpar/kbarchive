---
layout: page
title: "Q255225: XWEB: Meeting Request for Feb. 29 Doesn't Work with Asian OWA"
permalink: /kb/255/Q255225/
---

## Q255225: XWEB: Meeting Request for Feb. 29 Doesn't Work with Asian OWA

{% raw %}

	Article: Q255225
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use the Korean version of Outlook Web Access (OWA) and you try to create
	or edit meeting requests that fall on February 29 of a leap year, you cannot
	create or edit the meeting requests, and you may receive the following error
	message:
	
	  Microsoft Internet Explorer
	  You must specify a valid date. Check your entries in this dialog box to make
	  sure they represent a valid date.
	
	CAUSE
	=====
	
	This problem can occur because the data-parsing code in Outlook Web Access does
	not account for some special situations that occur if you use certain Asian
	operating system versions.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Outlook Web Access version 5.5 service
	pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date          Time      Size      File name     Language
	  ----------------------------------------------------------------
	  2/21/2000     2:40 PM   8,949     Pick.asp      Language Neutral	
	  2/21/2000     2:40 PM   30,760    FrmRoot.asp   Language Neutral
	
	
	
	To apply this fix, rename the two files, Pick.asp and Frmroot.asp, and then copy
	the new versions to the same folder. The default file locations are as follows:
	
	- Webdata\<language>\Calendar\Pick.asp
	
	- Webdata\<language>\Forms\Ipm\Schedule\Meeting\Request\FrmRoot.asp
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: 98
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
