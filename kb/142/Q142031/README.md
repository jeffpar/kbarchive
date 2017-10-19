---
layout: page
title: "Q142031: BUG: Error Installing Windows NT Resource Kit Perl Utility"
permalink: /kb/142/Q142031/
---

## Q142031: BUG: Error Installing Windows NT Resource Kit Perl Utility

	Article: Q142031
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When trying to install the Perl Utility, you may receive this error:
	
	  Could not find Perl interpreter - *gasp* *wheez* *choke*
	
	CAUSE
	=====
	
	The Install.bat program looks for the Perl.exe file in the wrong directory.
	
	WORKAROUND
	==========
	
	Copy the Perl.exe file from the \Reskit directory to the Reskit\Perl\5.001
	subdirectory. Then run Install.bat from the command prompt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Resource Kit version
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.50 3.51 prodnt setup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword5
	Version           : :3.51
	
	=============================================================================
	
