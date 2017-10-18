---
layout: page
title: "Q255796: Updating a Management Agent's Templates from Its Working Folder"
permalink: kb/255/Q255796/
---

## Q255796: Updating a Management Agent's Templates from Its Working Folder

	Article: Q255796
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2,2.2 SP1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 27-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, versions 2.1, 2.2, 2.2 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can update a Management Agent's templates from its working folder by running
	"Update Management Agent." You may need to update your Management Agent
	templates to recover from unsuccessful Management Agent changes or to transfer a
	Management Agent between Microsoft Metadirectory Services-based servers.
	Management Agent templates are stored as attributes of the Management Agent
	object in the metaverse. By default, the Management Agent will be updated with
	the included templates in the Zoomserv\Data\Dsgates folder. Any customization
	you have performed in the Design MA area will be lost. If you have recorded your
	templates to the working folder, this article describes how to refresh the
	Management Agent with those templates.
	
	MORE INFORMATION
	================
	
	Before following these steps, you must either:
	
	- Have recorded the customized Management Agent templates to the working folder
	  and now need to restore the metaverse with your customized templates. For
	  information about recording Management Agents templates to the working
	  folder, see the following article in the Microsoft Knowledge Base:
	
	  Q250479 Recording Management Agent Templates in Microsoft Metadirectory
	  Services
	
	- Have custom templates that you want to use in place of the current templates.
	  You have copied them into the working folder, overriding the existing
	  templates.
	
	Updating a Management Agent from the Working Folder
	---------------------------------------------------
	
	1. Log on to the Compass client with administrator access.
	
	2. Click the MA that you want to update.
	
	3. In the Actions panel, click Properties.
	
	4. On the Recording Templates tab, click to select the "Update this MA from its
	  working directory's templates located at : \Zoomserv\Data\Ds\0000000#" check
	  box.
	
	5. Click OK.
	
	6. In the Actions panel, click Update Management Agent.
	
	7. In the Update Management Agent dialog box, click Yes. You should then receive
	  a message indicating a successful update.
	
	For additional information about Management Agent working folders, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q254189 Description of the Management Agent Working Folders
	
	Additional query words: MA
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbMMSSearch kbMMS210 kbMMS220 kbMMS220SP1
	Version           : :2.1,2.2,2.2 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
