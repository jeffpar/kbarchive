---
layout: page
title: "Q200472: XFOR: How to Change the Default Header Separator for SNADSCONN"
permalink: /kb/200/Q200472/
---

## Q200472: XFOR: How to Change the Default Header Separator for SNADSCONN

	Article: Q200472
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may need to customize the header formation of the outgoing message from
	Exchange Server to the host. By default, a dashed line (-) separator is drawn
	under the Subject portion of the header. You may want to change this and this
	article describes an undocumented feature to remove or change the line
	separator.
	
	MORE INFORMATION
	================
	
	To remove or change the dashed line separator underneath the Subject portion of
	the header, follow these steps:
	
	1. Open up the Exchconn.ini file located under the Exchsrvr\Connect\Exchconn
	  directory. The exact location will be based on where the SNADS connector was
	  installed.
	
	2. Look for the [LME-SNADS-MEXDIA] section, you should find several parameters
	  already defined here:
	
	  [LME-SNADS-MEXDIA]
	
	   title      = Exchange To SNADS Transform
	   executable = lsmexdia.exe
	   params     = &s
	   outputq    = snads.in
	
	3. Add the following line to this section to effectively remove the dashed-line
	  separator:
	
	  [LME-SNADS-MEXDIA]
	
	   title      = Exchange To SNADS Transform
	   executable = lsmexdia.exe
	   params     = &s
	   outputq    = snads.in
	   lastline   =
	
	  Or add a string value to this parameter to set the separator. By default, the
	  SNADS connector will only output up to 78 characters, so if the string value
	  supplied is greater than 78 characters (or what the 'hostnoterightmargin'
	  value is in the [LME-SNADS] section) it will be truncated accordingly. The
	  string value is not repeated, so if you want 78 asterisk (*) characters, you
	  need to set lastline as follows:
	
	  lastline =
	  "******************************************************************************"
	
	4. Stop and restart the SNADS connector. The dashes under the Subject line will
	  now be removed, or changed to the specified value.
	
	
	Additional query words: SNADS connector; header composition, Subject line
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
