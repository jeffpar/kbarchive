---
layout: page
title: "Q238742: Query Modifications Display at Top of Results Page"
permalink: /kb/238/Q238742/
---

## Q238742: Query Modifications Display at Top of Results Page

{% raw %}

	Article: Q238742
	Product(s): Internet Information Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a custom query in your IDQ file, the code you append to the user's
	query is displayed on the results page. In other words, if you query on
	"enhance" without modifying the CiRestriction line, you will see the following
	text at the top of the results page:
	
	  
	
	  Documents 1 to 10 of 15 matching the query "enhance".
	
	However, if you use the CiRestriction line to add to the user's query (excluding
	directories, and so on), you will see the following:
	
	  
	
	  Documents 1 to 10 of 15 matching the query "enhance" &! #vpath *\_vti*
	
	In some cases, this addition to the user's query can confuse the user, and
	administrators do not want it displayed.
	
	Note: This only occurs when you use the HTM/IDQ/HTX combination. The ASP file
	does not have this issue; it handles the results page correctly automatically.
	
	RESOLUTION
	==========
	
	To prevent the custom query from appearing on the results page, use the
	following steps:
	
	1. In your IDQ file, find the CiRestriction line; it will look as follows:
	
	  CiRestriction=%if FreeText eq on% $contents "%CiRestriction%" %else% %CiRestriction% # %endif%
	
	2. Change any instance of "%CiRestriction%" in that line to "%UserRestriction%".
	  The line above will read as follows:
	
	  CiRestriction=%if FreeText eq on% $contents "%UserRestriction%" %else% %UserRestriction% # %endif%
	
	3. In the following sample of code from the default HTX file, do not make any
	  changes to these lines when you reach step four; these lines require the
	  CiRestriction variable.
	
	  <a href="oop/qsumrhit.htw?CiWebHitsFile=<%escapeURL vpath%>&CiRestriction=<%escapeURL CiRestriction%>&CiQueryFile=/iissamples/issamples/query.idq&CiBeginHilite=<%escapeURL <b class=Hit>%>&CiEndHilite=<%escapeURL </b>%>&CiUserParam3=../<%escapeURL HTMLQueryForm%>"><IMG src="hilight.gif" align=middle alt="Highlight matching terms in document using Summary mode."> Summary</a>
	
	  <a href="oop/qfullhit.htw?CiWebHitsFile=<%escapeURL vpath%>&CiRestriction=<%escapeURL CiRestriction%>&CiQueryFile=/iissamples/issamples/query.idq&CiBeginHilite=<%escapeURL <b class=Hit>%>&CiEndHilite=<%escapeURL </b>%>&CiUserParam3=../<%escapeURL HTMLQueryForm%>&CiHiliteType=Full"><IMG src="hilight.gif" align=middle alt="Highlight matching terms in document."> Full</a>
	
	4. Go through your HTM, IDQ, and HTX files and replace every instance (not
	  referenced above) of "CiRestriction" with "UserRestriction." When you have
	  completed this, the word "CiRestriction" should appear only three times in
	  all three files, at the beginning of the line referred to in step 1 and step
	  2 above, and in the two lines referred to in step 3 above. Of course, if the
	  instance of "CiRestriction" that you are replacing has percent signs (%)
	  around it, do not delete it; the only thing that will change is the text
	  between them.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : winnt:2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
