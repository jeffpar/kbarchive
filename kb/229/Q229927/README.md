---
layout: page
title: "Q229927: SMS: Long Event to Trap Translator Description Brings Error"
permalink: /kb/229/Q229927/
---

## Q229927: SMS: Long Event to Trap Translator Description Brings Error

{% raw %}

	Article: Q229927
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Eventrap.exe tool to translate a Windows NT event, you enter
	description text longer than 2,048 bytes and the following message appears:
	
	  Please enter no more than 2,048 characters.
	
	One common occurrence of this problem involves Microsoft SNA Server event ID 23.
	
	CAUSE
	=====
	
	This problems is caused by the method used to create the dialog box for the
	event text. One of the parameters for this dialog box, which is created by
	Microsoft Foundation Class, is maximum buffer size. That maximum is currently
	2,048 bytes. The hotfix described below changes the maximum buffer size to
	16,384 bytes.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Systems Management Server 1.2 SP5 that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  04/12/99  08:34pm             260,080  EVENTRAP.EXE    Intel
	  04/12/99  08:34pm             622,352  EVENTRAP.EXE    Alpha
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
