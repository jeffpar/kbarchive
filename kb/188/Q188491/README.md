---
layout: page
title: "Q188491: IIS 4.0 Applies Footers To All Documents"
permalink: /kb/188/Q188491/
---

## Q188491: IIS 4.0 Applies Footers To All Documents

{% raw %}

	Article: Q188491
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft Internet Information Server 4.0 option Append Footers is
	selected for a given virtual root, all files and/or documents downloaded from
	that v-root will have footers appended regardless of document type. For example,
	HTML, ASP, EXE, GIFs, JPGs, and so on will all have footers appended. In some
	cases this will cause the browser downloading the file or document to hang.
	
	CAUSE
	=====
	
	Some documents will download with no problem due to the document's format. Other
	documents do not have a length indicator, which causes the file being downloaded
	to become corrupted due to the appended footer.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	- Place only HTML documents under v-roots that are marked for auto-footer
	  application.
	
	- Use the Mdutil found in the Windows NT Option Pack to set the Footer Enable
	  value to 0.
	
	The following example shows how to set this attribute for one document:
	
	  Mdutil set /w3svc/1/root/foo.htm/FooterEnabled  0
	
	The following example shows how to set this attribute for an entire group of
	documents:
	
	  For %%I in (*.exe) mdutil set /w3svc/1/root/%%I/FooterEnabled 0
	
	Additional query words: hang stuck frozen bogus footer
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
