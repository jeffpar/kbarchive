---
layout: page
title: "Q148664: XCLN: Description of the Profile Descriptor File"
permalink: /kb/148/Q148664/
---

## Q148664: XCLN: Description of the Profile Descriptor File

	Article: Q148664
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the format of the Profile Descriptor File (.PRF) that is
	used with the Automatic Profile Generator (Newprof.exe).
	
	The PRF file contains profile settings that Newprof.exe reads and which are then
	added to the newly created profile.
	
	Each of the Microsoft Exchange Clients share point's, contain a template PRF
	file, named Template.prf. When the Microsoft Exchange Setup Editor is run
	against the client share point, it copies Template.prf to Default.prf. Any user
	option changes made using the Setup Editor, are then written to Default.prf.
	When the client Setup program is run, if the file Default.prf is present in the
	client installation directory, it is copied to the Windows directory on the
	client machine and then Newprof.exe is run to create a new profile.
	
	MORE INFORMATION
	================
	
	The Profile Descriptor File contains information relating to the services to be
	installed in the profile and contains 4 major sections:
	
	- Section 1: Profile Defaults
	
	- Section 2: Services in the profile
	
	- Section 3: Default values for each service
	
	- Section 4: Mapping for profile properties
	
	Section 1: Profile Defaults
	---------------------------
	
	This part of the PRF file contains values that apply to the entire profile
	specified below the [General] section
	
	Under the [General] section, the following entries are used.
	
	- ProfileName=<Name of the Profile>
	  This entry specifies the name to be used when creating the profile.
	
	- DefaultProfile= [Yes/No]
	  If the value is set to Yes, then the profile being created will be set as the
	  default profile. By default, this entry is set to Yes.
	
	- OverwriteProfile= [Yes/No]
	  Determines whether the profile being created should overwrite an existing
	  profile with the same name. If the value is set to No, and a profile with the
	  same name, as that specified in the ProfileName entry, does exist, then the
	  profile will not be created. The default value is No.
	
	- DefaultStore=<Service ID>
	  <Service ID> corresponds to a service that is to be used as the default
	  store. The Service ID's are got from the entries listed in the [Service List]
	  section, described below. By default, the value is set to Service2, which
	  corresponds to the Microsoft Exchange Server Service. This is determined by
	  looking at the [Service List] section. In that section look for an entry
	  whose name is Service2. The value of this entry is the actual name of the
	  service.
	
	Section 2: Services in the Profile
	----------------------------------
	
	This part of the file lists all the services that are to be installed on in the
	profile. The names of the Profiles are listed as entries under the [Service
	List] section. By default the [Service List] section is as below:
	
	 [Service List]
	 Service1=Microsoft Exchange Client
	 Service2=Microsoft Exchange Server
	 Service3=Personal Address Book
	
	The services listed in this section will be installed only if the settings
	associated with each of these services are valid. If the Automatic Profile
	Generator encounters a problem with one or more of the settings associated with
	a service, it may not install that service in the profile being created.
	
	Section 3: Default Values for each service
	------------------------------------------
	
	This section of the file contains service specific information for the services
	listed under the [Service List] section. For each of the services listed under
	the [Service List] section, there should be a section with that service name.
	This section should contain entries for each configurable option for the
	service.
	
	By default, there are the following sections:
	
	  [Service1]
	  This section contains configurable options for the Microsoft Exchange Client.
	  The different settings available in the Microsoft Exchange Client, are
	  enumerated in Section 4 of the PRF file, which is described below.
	
	  [Service2]
	  This section contains settings for the Microsoft Exchange Server service. The
	  different configurable settings available in the Microsoft Exchange Server
	  service, are enumerated in Section 4 of the PRF file.
	
	  [Service3]
	  This section contains settings for the Microsoft Exchange Personal Address
	  Book service. The different configurable settings available in the Microsoft
	  Exchange Personal Address Book service, are enumerated in Section 4 of the
	  PRF file.
	
	Section 4: Mapping for profile properties
	-----------------------------------------
	
	This section of the file contains a listing of all the supported properties for
	each of the services that Automatic Profile Generator supports.
	
	For each service, there is a section, under Section 4, with the name of that
	service. This section contains all the settings for that service that the
	Profile Generator supports. By default, there are sections for [Microsoft
	Exchange Client], [Microsoft Exchange Server], [Personal Folders], [Personal
	Address Book] and [Microsoft Mail].
	
	For each entry in the [Service List] section, there must be a corresponding
	section in Section 4 of the file. So, for example, if under the [Service List]
	section, there is an entry:
	
	  Service1=Microsoft Exchange Client
	
	There must be a section called [Microsoft Exchange Client] in Section 4 of this
	file. The [Microsoft Exchange Client] section contains descriptions of all the
	options that can be set for the Exchange Client. Each description contains the
	type of that entry and an internal id number. There is also a text description
	of the entry which explains the use of that option and the values that can be
	assigned to the option.
	
	NEWPROF.EXE reads Section 4, to determine how to interpret each of the options.
	The textual description of each option is commented out and hence NEWPROF.EXE
	ignores these lines.
	
	Using the above example, if in the [Service List] section, we have the entry:
	
	  Service1=Microsoft Exchange Client
	
	There should a section called [Service1] in Section 3 of the file as well as a
	section [Microsoft Exchange Client] in Section 4.
	
	For each entry specified in the [Service1] section, there must be a corresponding
	entry in the [Microsoft Exchange Client] section which describes the type
	(whether the option is a Boolean variable, integer,...) and an internal id
	number. If the corresponding entry is not present in the [Microsoft Exchange
	Client] section, the Automatic Profile Generator (Newprof.exe) will not be able
	to interpret that option and will display an error message.
	
	Hence, in order to have Newprof.exe set a particular option for a service, that
	service id might be listed in the [Service List] section. The option must be
	listed with a valid value in the [Service id] section, where Service id is the
	entry name corresponding to that service in the [Service List] section. There
	must also be a section corresponding to the Service Name in Section 4 of the
	file, and this section should have the description information for the option
	that we need to set.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
