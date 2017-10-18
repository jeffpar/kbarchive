---
layout: page
title: "Q304744: Print Jobs May Have Incorrect LPI Or Page Breaks"
permalink: kb/304/Q304744/
---

## Q304744: Print Jobs May Have Incorrect LPI Or Page Breaks

	Article: Q304744
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhis2000 kbhis2000bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	LU3 print jobs may print at 6 lines per inch (LPI) even though the print session
	is configured to print a specified number of lines per page that should result
	in a different LPI value (such as 8 LPI).
	
	Additionally, LU1 and LU3 print jobs that are configured to use a fixed font size
	may have page breaks (Form Feeds) at incorrect intervals. For example, a print
	job that should contain 66 lines per page may actually print with only 42 lines
	per page.
	
	CAUSE
	=====
	
	The following problems have been identified with the host print service that is
	included with Host Integration Server 2000:
	
	- The Lines Per Page, also known as Maximum Page Length (MPL), parameter is
	  ignored for LU3 print sessions.
	
	- The host print service incorrectly issues page breaks if a fixed font size is
	  specified in LU1 and LU3 print sessions.
	
	- The host print service incorrectly ignores the specified LPI or Lines Per
	  Page configuration when the Do Not Scale Horizontally option is selected.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Host Integration Server 2000 service pack that contains
	this fix.
	
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
	
	+-----------------------------------+
	| Date        | Time  | File name   | 
	+-----------------------------------+
	| Jul-31-2001 | 07:52 | Ppd3270.dll | 
	+-----------------------------------+
	| Jul-31-2001 | 07:52 | Winvprt.dll | 
	+-----------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	MORE INFORMATION
	================
	
	The host print service that is included with Host Integration Server 2000
	includes a number of configuration options that affect the formatting of host
	print jobs. The following are two clarifications with regards to the available
	horizontal and vertical scaling options:
	
	- The Do Not Scale Vertically option overrides the Lines Per Page setting. If a
	  specific Lines Per Page value is specified in the print session
	  configuration, it implies the use of vertical scaling so that the host print
	  service can fit the specified number of lines on a printed page.
	
	- Selecting a fixed-size font in the print session configuration overrides all
	  other horizontal and vertical scaling settings. Therefore, the host print
	  service does not perform any horizontal or vertical scaling for print jobs
	  printed through that print session.
	
	  Configuring a specific font point size for a font determines the exact size
	  and spacing of the font. It is the opposite of both the LPI and Lines Per
	  Page configuration options. Using an explicit LPI setting indicates that the
	  font size doesn't matter as long as the print job has the specified number of
	  lines per inch. Using an explicit Lines Per Page setting indicates that the
	  font size doesn't matter as long as the print job has the specified number of
	  lines on the page.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
