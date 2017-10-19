---
layout: page
title: "Q159311: Instantiating Remote Components in MTS and IIS"
permalink: /kb/159/Q159311/
---

## Q159311: Instantiating Remote Components in MTS and IIS

	Article: Q159311
	Product(s): Internet Information Server
	Version(s): winnt:2.0,4.0
	Operating System(s): 
	Keyword(s): kbtool kbASP kbCOMt kbMTS
	Last Modified: 29-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Transaction Server 2.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on how to use Active Server Pages (ASP) to
	instantiate a remote Microsoft Transaction Server (MTS) component that resides
	on a separate computer from the Microsoft Internet Information Server (IIS)
	computer. This article also addresses the issues that may arise from developing
	remote components for MTS 2.0 and IIS 4.0.
	
	MORE INFORMATION
	================
	
	If you are using NTLM security, it is not possible to directly call remote
	components, regardless of the IIS application's activation setting (in- process
	or out-of-process) or identity (local or domain user). To call remote components
	when using NTLM security, you need to do the following:
	
	1. Create an intermediate MTS package with a domain identity.
	
	2. Set the package activation to run in a dedicated server process.
	
	3. Install an intermediate component that calls the remote component into the
	  package. This intermediate component is then called from the ASP script and
	  in turn, calls the remote component.
	
	NOTE: When you use this technique, the direct caller, as seen by the remote
	component, will not be the original IIS caller, but the identity of the
	intermediate package.
	
	If you are using Basic security, it is possible to call remote components
	directly. However, this requires that you set the Basic Authentication Domain to
	the domain and not the local machine. Although this setting allows the remote
	components to see the direct caller as the original IIS caller and not the
	intermediate package identity, it is not recommended. For more information on
	Basic security, please see the IIS 4.0 online documentation.
	
	If you are using Anonymous security, it is possible to call remote components
	directly. However, this requires that you set the Anonymous User to a domain
	account. Although this setting allows the remote components to see the direct
	caller as the original IIS caller and not the intermediate package identity, it
	is not recommended. Anonymous security allows access to everyone. Allowing
	everyone access to your domain, even through a restricted account, can be a
	serious security risk. Therefore, it is recommended that you do not set the
	Anonymous account to a domain account. Instead, you should set the Anonymous
	User to the default (or some other local account) and use the intermediate MTS
	package technique, following the steps described above, to instantiate remote
	MTS components (without having to use NTLM).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbASP kbCOMt kbMTS 
	Technology        : kbMTSsearch kbiisSearch kbAudDeveloper kbiis400 kbMTS200
	Version           : winnt:2.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
