---
layout: page
title: "Q246614: SMS: Corrupted .ofr file Causes Offer Manager Not to Work"
permalink: /kb/246/Q246614/
---

## Q246614: SMS: Corrupted .ofr file Causes Offer Manager Not to Work

	Article: Q246614
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 01-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Offer Manager is the component that is responsible for updating instruction
	files so that clients receive notification of new advertisements in the form of
	instruction files in the Sms\Inboxes\Offerinf.box folder. At secondary sites, a
	single corrupted .ofr file in the Sms\Inboxes\Offermgr.box folder can cause
	Offer Manager to ignore one or more advertisements with no indication of an
	problem.
	
	In such cases, Offer Manager indicates reception of an advertisement each time an
	update is received, but does not process some or all of the advertisements.
	
	CAUSE
	=====
	
	This problem occurs because Offer Manager builds a list of advertisements before
	it actually processes them. Advertisements are individually loaded and parsed;
	if a single advertisement (.ofr file) is not loaded successfully, Offer Manager
	does not attempt to load any further advertisements. During subsequent
	evaluation, advertisements that were not loaded are not processed.
	
	WORKAROUND
	==========
	
	There are two ways to avoid this issue:
	
	- Obtain an uncorrupted version of the .ofr file from the parent site's
	  Sms\Inboxes\Offerinf.box folder and place it in the
	  Sms\Inboxes\Offermgr.box\Incoming folder. This overwrites the file in the
	  Sms\Inboxes\Offermgr.box folder and processing proceeds normally.
	
	- Remove the corrupted .ofr file from the Sms\Inboxes\Offermgr.box folder. To
	  identify the corrupted .ofr file, compare the .ofr files to those at the
	  parent site in the Sms\Inboxes\Offerinf.box folder. After replacing the file,
	  copy the .ofr file(s) for the unevaluated advertisement(s) from the
	  Sms\Inboxes\Offermgr.box folder to the Sms\Inboxes\Offermgr.box\Incoming
	  folder to trigger an advertisement evaluation cycle. Although this allows
	  other advertisements to be processed, the "bad" advertisement must be
	  re-created to be processed successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
