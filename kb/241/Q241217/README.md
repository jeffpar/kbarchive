---
layout: page
title: "Q241217: BUG: Source Browser Shows Decorated Name for Member Template"
permalink: /kb/241/Q241217/
---

## Q241217: BUG: Source Browser Shows Decorated Name for Member Template

{% raw %}

	Article: Q241217
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbLangCPP kbVC600bug kbDSupport
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Source Browser shows the decorated name instead of the undecorated name for a
	member template function.
	
	CAUSE
	=====
	
	The underlying name decoration and undecoration scheme does not handle member
	template functions correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Compile the following code with the Generate Browser Info option selected in
	  Project Settings dialog box:
	
	  class CC
	  {
	  public:
	     
	      template <typename K>
	      K test(K k) { return k; }
	  };
	
	  int main()
	  {
	      CC c;
	      int d=5;
	      int i = c.test(d);
	      return 0;
	  }
	
	2. On the Tools menu, click Source Browser.
	
	3. In the Select Query list box, click Definitions And References.
	
	4. Select the member template function test.
	
	The following decorated name appears:
	
	  ?test@CC@@QAE?AVtemplate-parameter-BAB@Vtemplate-parameter-BAB@@Z
	
	NOTE: The same problem occurs if you use the BSC APIs from the Browser ToolKit.
	
	REFERENCES
	==========
	
	For additional information on the Browser Toolkit, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q153393 FILE: Browser Toolkits for Microsoft Visual C++
	
	Additional query words: member template, name decoration and undecoration, source browser, BSC API
	
	======================================================================
	Keywords          : kbLangCPP kbVC600bug kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
