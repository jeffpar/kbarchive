---
layout: page
title: "Q146565: Multiple Indented IF Statements Results in Error"
permalink: kb/146/Q146565/
---

## Q146565: Multiple Indented IF Statements Results in Error

	Article: Q146565
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use multiple indented IF statements in your .HTX file, the following
	error message appears:
	
	  Error performing operation. The template file contains an endif without a
	  matching if tag.
	
	The following is a sample code:
	
	     if ...
	        if ...
	           if ...
	           .
	           else
	           .
	           endif
	        else
	         .
	        endif
	     else
	      .
	     endif
	
	
	WORKAROUND
	==========
	
	To work around this problem, do not use IF statements with ELSE for indented IF
	statements. The following is a sample code:
	
	  if ...
	  if ...
	  if ...
	  .
	  endif
	  endif
	  else
	  .
	  endif
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 1.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	
