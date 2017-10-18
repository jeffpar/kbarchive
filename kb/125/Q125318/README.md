---
layout: page
title: "Q125318: Default Data Type RAW (FF Auto) Does Not Work Properly"
permalink: kb/125/Q125318/
---

## Q125318: Default Data Type RAW (FF Auto) Does Not Work Properly

	Article: Q125318
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the Data Type to either FF Auto or FF Appended, you receive an
	extra page when you print. This usually occurs when you print from MS- DOS-based
	applications such as Word Perfect and Lotus 1-2-3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version A supported
	fix is now available, but is not fully regression-tested and should be applied
	only to systems experiencing this specific problem. Unless you are severely
	impacted by this specific problem, Microsoft recommends that you wait for the
	service pack release containing this fix. Contact Microsoft Product Support
	Services for more information. Microsoft does not recommend implementing this
	fix at this time. Contact Microsoft Product Support Services for more
	information on the availability of this fix.
	
	
	MORE INFORMATION
	================
	
	Under Windows NT version 3.5, you can set the default data type for a print
	queue to Raw (FF Auto) or RAW (FF Appended). When you choose RAW (FF Auto),
	Windows NT adds the appropriate command to produce a form feed at the end of the
	print job, unless Windows NT detects that a form feed command is already at the
	end of the print job. When you select RAW (FF Appended), Windows NT adds the
	appropriate command to produce a form feed at the end of the job.
	
	Additional query words: prodnt 3.50 printing job 123 data type
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
