---
layout: page
title: "Q233544: Certain Invalid Date Fields Are Converted to Valid Dates"
permalink: /kb/233/Q233544/
---

## Q233544: Certain Invalid Date Fields Are Converted to Valid Dates

{% raw %}

	Article: Q233544
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp2
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	- Microsoft SNA Server, version 4.0SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A variable defined as COBOL type PICTURE 9(7) COMPUTATIONAL-3 (packed decimal)
	may contain a value to be converted to an automation type of "Date." This
	article relates to only the case where "Date only" is specified in the COM
	Transaction Integrator for CICS and IMS (COMTI) Component Builder (CB). That
	means the field contains a date value, but no time value.
	
	Certain values placed in the COBOL variable are not converted by COMTI runtime as
	might be expected. For example, if 0x00000000 (nulls, or LOW-VALUES) are
	assigned to the variable by the COBOL program, the date, 12/31/1999, is returned
	to a Visual Basic client.
	
	In another example, the value, +50, assigned by the COBOL program is returned to
	VB client as the date 2/19/2000. In yet another example, assigning 0x0000001f to
	the COBOL variable yielded the date 1/1/2000.
	
	WORKAROUND
	==========
	
	Assign a valid Julian date to the variable in the COBOL program, in the format,
	YYYYDDDx, where YYYY is the century and year, DDD is the day of the year, and x
	is not used.
	
	On the mainframe, the x is actually the sign of the decimal number. It is not
	used by COMTI when converting the date to the automation type.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2
	Version           : WINDOWS:4.0 SP2,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
