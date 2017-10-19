---
layout: page
title: "Q176043: HOWTO: Add or Subtract Time with a DateTime Data Type"
permalink: /kb/176/Q176043/
---

## Q176043: HOWTO: Add or Subtract Time with a DateTime Data Type

	Article: Q176043
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnokeyword kbHWMAC kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to add or subtract time with a DateTime field. Time,
	in seconds, can be added or subtracted with a DateTime data type field. Time
	carries over from seconds to minutes to hours to days and to years. There are no
	adjustments in this sample for a leap year. This is an example and you may want
	to add additional functionality if time calculations are a large part of your
	application.
	
	MORE INFORMATION
	================
	
	When you add or subtract time with a DateTime field, the value(s) to add or
	subtract will be calculated with seconds.
	
	Example to add an hour:
	
	     HourFromNow = Datetime() + 3600
	
	-or-
	
	Example to subtract a week:
	
	     WeekAgo = Datetime() - (7*24*3600)
	
	(c) Microsoft Corporation, 1997, All Rights Reserved. Contributions by Mike
	Fernald, Microsoft Corporation
	
	
	Additional query words: datetime day hour minute second hh:mm:ss
	
	======================================================================
	Keywords          : kbnokeyword kbHWMAC kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
