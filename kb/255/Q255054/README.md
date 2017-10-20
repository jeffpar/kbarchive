---
layout: page
title: "Q255054: COM+ Does Not Reach SetMaxThreads for the Package"
permalink: /kb/255/Q255054/
---

## Q255054: COM+ Does Not Reach SetMaxThreads for the Package

{% raw %}

	Article: Q255054
	Product(s): Internet Information Server
	Version(s): winnt:5.0; :
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbThread kbDSupport kbiis500 kbWin2000PreSP1Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	An application, such as ASP in Internet Information Services (IIS) 5.0, that uses
	COM+ to manage a thread pool may experience poor performance because COM+ does
	not increase the thread count in the pool. Under normal conditions, COM+
	increases the threads in the thread pool up to the maximum thread limit set by
	the SetMaxThreads method for the package. However, if the initial worker threads
	in the pool are too busy, then this issue may occur.
	
	For example, when the ASP work load on an IIS 5.0 computer increases so that each
	worker thread uses up a considerable amount of time to complete each request,
	COM+ may never create any more threads even though the work in the shared queue
	is always increasing, which in this case, causes ASP queuing to occur. This
	problem can be identified by monitoring CPU usage. This problem will show up
	when CPU utilization by Inetinfo is very low, usually on long blocking calls.
	
	CAUSE
	=====
	
	Under heavy load, it is possible that the thread pool monitoring thread is not
	spin up. When this happens, additional threads are not added as needed. The
	thread pool monitoring thread must always be active.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem immediately, download the fix as instructed below or
	contact Microsoft Product Support Services to obtain the fix. For a complete
	list of Microsoft Product Support Services phone numbers and information on
	support costs, please go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  US English
	  Download Q262259_w2k_sp1_x86_en.exe now
	  (http://download.microsoft.com/download/win2000srv/Patch/Q262259/NT5/EN-
	  US/Q262259_W2K_SP1_X86_EN.EXE)
	
	  French
	  Download Q262259_w2k_sp1_x86_fr.exe now
	  (http://download.microsoft.com/download/win2000srv/Patch/Q262259/NT5/FR/Q2
	  62259_W2K_SP1_X86_FR.EXE)
	
	  German
	  Download Q262259_w2k_sp1_x86_de.exe now
	  (http://download.microsoft.com/download/win2000srv/Patch/Q262259/NT5/DE/Q2
	  62259_W2K_SP1_X86_DE.EXE)
	
	  Italian
	  Download Q262259_w2k_sp1_x86_it.exe now
	  (http://download.microsoft.com/download/win2000srv/Patch/Q262259/NT5/IT/Q2
	  62259_W2K_SP1_X86_IT.EXE)
	
	  Japanese
	  Download Q262259_w2k_sp1_x86_ja.exe now
	  (http://download.microsoft.com/download/win2000srv/Patch/Q262259/NT5/JA/Q2
	  62259_W2K_SP1_X86_JA.EXE)
	
	  Spanish
	  Download Q262259_w2k_sp1_x86_es.exe now
	  (http://download.microsoft.com/download/win2000srv/Patch/Q262259/NT5/ES/Q2
	  62259_W2K_SP1_X86_ES.EXE)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was first corrected in Windows 2000 Service Pack 1.
	
	Additional query words: COM+ Thread Pool
	
	======================================================================
	Keywords          : kbOSWin2000 kbThread kbDSupport kbiis500 kbWin2000PreSP1Fix 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbiisSearch kbiis500 kbWinAdvServSearch
	Version           : winnt:5.0; :
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
