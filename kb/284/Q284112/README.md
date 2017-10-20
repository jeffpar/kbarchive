---
layout: page
title: "Q284112: File Names Not Listed When You Query with Descending Sorted Rank"
permalink: /kb/284/Q284112/
---

## Q284112: File Names Not Listed When You Query with Descending Sorted Rank

{% raw %}

	Article: Q284112
	Product(s): Internet Information Server
	Version(s): 2.0,2000
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	- Indexing Service, included with:
	   - Microsoft Windows 2000 Advanced Server 
	   - Microsoft Windows 2000 Professional 
	   - Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you query a catalog that contains content from indexing Web sites, as well
	as content from indexing physical directories, and you use a "SortBy=Rank" and
	"OrderBy=[D]" (descending) query, the filename property in the result may be
	missing and the path property only contains the directory and not
	directory+filename.
	
	CAUSE
	=====
	
	This problem occurs if the vpath element is listed in the columns' property
	before the path element. For example:
	
	  Q.Columns = "vpath, path, filename, DocTitle, Write, Size, Rank"
	
	RESOLUTION
	==========
	
	To work around this problem, place the path element in the columns' property
	before the vpath element. For example:
	
	  Q.Columns = "path, vpath, filename, DocTitle, Write, Size, Rank"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100
	Version           : :2.0,2000
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
