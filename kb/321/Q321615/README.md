---
layout: page
title: "Q321615: FIX: The SAK Function IsCmdFinished Returns Incorrect Value"
permalink: /kb/321/Q321615/
---

## Q321615: FIX: The SAK Function IsCmdFinished Returns Incorrect Value

	Article: Q321615
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Server Appliance Kit (SAK), version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you call the SAK function IsCmdFinished, you expect the return code to be
	0x8000000A (E_PENDING) if the task completes. The actual value that is returned
	is 0x80004005.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Server Appliance Kit that contains this
	fix.
	
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
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date        Time    Version   Size    File name           Platform
	  -----------------------------------------------------------------
	  04/23/2002  08:55AM           395     info.inf            x86
	  02/22/2002  05:17PM           495,104 sahotfixQ321615.msi x86
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSAK200 kbAudDeveloper kbSAKSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
