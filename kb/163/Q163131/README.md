---
layout: page
title: "Q163131: ODE97: Replication Manager Leaves Replica Set Info in Registry"
permalink: /kb/163/Q163131/
---

## Q163131: ODE97: Replication Manager Leaves Replica Set Info in Registry

{% raw %}

	Article: Q163131
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	
	SYMPTOMS
	========
	
	When you remove Microsoft Replication Manager 3.5 from your computer, and then
	reinstall it, you may receive the following message when you start Replication
	Manager:
	
	  The managed replica '<Path and Filename>' doesn't exist or isn't
	  accessible.
	
	This message may appear if you have installed Replication Manager from the
	Microsoft Office 97 Developer Edition Tools (ODE Tools), or from a Microsoft
	Access 97 run-time application that includes Replication Manager.
	
	CAUSE
	=====
	
	When you remove Microsoft Replication Manager 3.5 from your computer, the
	Windows Registry keys that store information about managed replicas remain.
	
	RESOLUTION
	==========
	
	When you see the message described in the "Symptoms" section, you are also
	prompted with the question "Would you like to remove it from the list of managed
	replicas?" If the managed replica no longer exists, click Yes to remove it from
	the managed replica list. If the replica is temporarily inaccessible, and you
	still want to manage it with Replication Manager, click No.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Office 97 Developer
	Edition Tools.
	
	MORE INFORMATION
	================
	
	The message is the same one that you see any time you start Microsoft
	Replication Manager and it cannot find a managed replica. However, when you
	remove Replication Manager from your computer, you might expect information
	about which replica databases it managed to be removed also.
	
	If you install Microsoft Replication Manager 3.5 as part of ODE Tools Setup,
	remove it, and then reinstall it again later, the replicas that it previously
	managed may still exist. If those replicas are accessible when you start
	Replication Manager, you won't even see the message; the replicas will
	automatically appear in Replication Manager's managed replica list.
	
	If you have Replication Manager on your computer as part of a run-time
	application, and you remove that application, the information about the managed
	replicas remains in the Windows Registry. If you later install another run-time
	application that includes Replication Manager, the original managed replica
	displayed in the message no longer exists on your computer.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Set up and configure Replication Manager on your computer.
	
	2. Add at least one managed replica to Replication Manager.
	
	3. Remove Replication Manager from your computer.
	
	4. Move, rename, or delete the managed replica.
	
	5. Reinstall Replication Manager, and then start it. Note that you receive the
	  message as Replication Manager looks for the replicas it managed in its
	  previous installation.
	
	REFERENCES
	==========
	
	For more information about using Replication Manager, search the Microsoft ODE
	Tools Help Index for "Replication Manager," or refer to the Replication Manager
	white paper included with Microsoft ODE Tools.
	
	Additional query words: ODE Replman design master replica set the managed replica doesn t exist or isn t accessible
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
